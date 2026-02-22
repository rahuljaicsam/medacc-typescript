# Firebase Restructure Plan — Better Search & Data Fetching

> **Author:** AI Assistant  
> **Date:** 2026-02-21  
> **Status:** Proposal  

---

## Table of Contents

1. [Current Architecture & Problems](#1-current-architecture--problems)
2. [Proposed Architecture](#2-proposed-architecture)
3. [Document Schema](#3-document-schema)
4. [Index Strategy](#4-index-strategy)
5. [Data Fetching Rewrite](#5-data-fetching-rewrite)
6. [Search Improvements](#6-search-improvements)
7. [Migration Plan](#7-migration-plan)
8. [Cost & Performance Impact](#8-cost--performance-impact)

---

## 1. Current Architecture & Problems

### Current Firestore Structure

```
doctor-salary-db/
├── metrics/                          ← Top-level collection (hospital-level docs)
│   ├── {hospitalId}/                 ← Doc: lat, lng, salary, searchKeywords, state, district
│   │   ├── MBBS/                     ← Subcollection by degree
│   │   │   └── {docId}/             ← Degree-specific salary data
│   │   ├── MD/
│   │   │   ├── Internal Medicine/    ← Nested specialty subcollection
│   │   │   ├── Dermatology/
│   │   │   └── ...
│   │   ├── MS/
│   │   │   ├── General Surgery/
│   │   │   ├── Ophthalmology/
│   │   │   └── ...
│   │   ├── DM/
│   │   └── MCh/
│   └── ...
```

### Problems

| # | Problem | Impact |
|---|---------|--------|
| **P1** | **Data scattered across 25+ collections** | Must query 25+ collectionGroups on every load. Each is a separate Firestore read. Initial load makes 26+ network requests. |
| **P2** | **4-stage fallback per collection** | Each of the 25 collections can fail 3 times before succeeding = up to **100 error-handling paths** per page load. Massive latency. |
| **P3** | **`searchKeywords` is manually curated** | Array is hand-built with variations like `["AIIMS", "aiims", "AIIMS Delhi"]`. Inconsistent across documents. Many docs are missing it entirely — server-side `array-contains` just skips them. |
| **P4** | **Inconsistent field formatting** | `degree: "MD "` (trailing space), `specialty: "Internal Medicine, Community Medicine, ..."` (comma-separated string instead of array). Causes silent client-side filter mismatches. |
| **P5** | **Duplicate data** | Same hospital appears in `metrics`, then again in `MBBS`, `MD`, `General Surgery` etc. with slightly different fields. Redundant reads + duplicate markers on map. |
| **P6** | **`limit(50)` per collection on initial load** | With 25 collections × 50 = only 1,250 docs max. But most collections return 0-5 docs, so actual data is ~123 out of potentially thousands. |
| **P7** | **No pagination** | All filtered data must fit in one shot. No cursor-based pagination means you either over-fetch or miss data. |
| **P8** | **Collection names have spaces** | `"GP or Freelance"`, `"General Surgery"`, `"Internal Medicine"` — causes URL-encoding issues in Firebase Console and requires exact string matching in queries. |

### Visual: Current Query Flow (per page load)

```
User clicks "Apply Filters"
  │
  ├─→ Query metrics               (1 request)
  │
  ├─→ Query MBBS (collectionGroup) → fails? → root+filters → fails? → root+state → fails? → raw fetch
  ├─→ Query MD (collectionGroup)   → fails? → root+filters → fails? → root+state → fails? → raw fetch
  ├─→ Query MS ...                 → (same 4-stage fallback)
  ├─→ Query General Surgery ...    → (same 4-stage fallback)
  ├─→ Query Ophthalmology ...      → (same 4-stage fallback)
  │   ... (25 total collections)
  │
  ├─→ Deduplicate results          (O(n²) loop checking r.id)
  ├─→ Client-side filter           (degree, specialty, state, district, workplace, search)
  │
  └─→ Set mapData (render markers)

  Total: 26-100+ Firestore requests  ❌
```

---

## 2. Proposed Architecture

### Core Idea: **Single Flat Collection**

Store ALL salary records in **one collection** called `salary_records`. Each document represents one unique combination of:

> **Hospital × Degree × Specialty = 1 Document**

```
doctor-salary-db/
├── salary_records/                   ← Single flat collection
│   ├── {autoId}/                     ← One doc per hospital-degree-specialty combo
│   ├── {autoId}/
│   └── ...
│
├── hospitals/                        ← Optional: deduplicated hospital master data
│   ├── {hospitalId}/                 ← Name, lat, lng, address, state, district, QoL metrics
│   └── ...
│
└── aggregates/                       ← Optional: pre-computed aggregates
    ├── state:{stateName}/            ← Avg salary by state
    ├── degree:{degreeName}/          ← Avg salary by degree
    └── ...
```

### Why One Collection?

| Benefit | Explanation |
|---------|-------------|
| **1 query instead of 26+** | Filter by any combination of `degree`, `specialty`, `state`, `district` in ONE `where()` chain |
| **No fallbacks needed** | All docs are in the same collection with the same indexes. If the index exists, the query works for ALL data. |
| **Consistent schema** | Every document has the same fields. No "sometimes it has searchKeywords, sometimes not" |
| **Native Firestore filtering** | Use compound `where()` clauses directly instead of client-side filtering |
| **Pagination built-in** | Use `startAfter()` / `limit()` cursors for infinite scroll |

---

## 3. Document Schema

### `salary_records/{autoId}`

```typescript
interface SalaryRecord {
  // === Identity ===
  id: string;                    // Auto-generated document ID
  hospitalId: string;            // Reference to hospitals/ collection (for dedup)

  // === Location (always present, always trimmed & lowercase-normalized) ===
  hospitalName: string;          // "AIIMS New Delhi" (display name, original case)
  hospitalName_lower: string;    // "aiims new delhi" (for search)
  address: string;               // Full address
  state: string;                 // "Delhi" (title case, trimmed)
  state_lower: string;           // "delhi" (for search)
  district: string;              // "New Delhi"
  district_lower: string;        // "new delhi"
  country: string;               // "India" (default)
  latitude: number;              // 28.567171 (NUMBER, not string!)
  longitude: number;             // 77.210040 (NUMBER, not string!)

  // === Medical Classification (always present) ===
  degree: string;                // "MBBS" | "MD" | "MS" | "DM" | "MCh" | ...
  degree_lower: string;          // "mbbs"
  specialty: string;             // "Internal Medicine" (single value, NOT comma-separated!)
  specialty_lower: string;       // "internal medicine"
  workplace: string;             // "Tertiary Hospital" | "Private Clinic" | ...
  workplace_lower: string;       // "tertiary hospital"

  // === Salary Data ===
  averageSalary: number;         // 100000 (always a number)
  lowestSalary?: number;
  highestSalary?: number;

  // === Quality Metrics (optional) ===
  qualityOfLife?: number;        // 0-10 scale
  toxicity?: number;
  workHecticity?: number;
  outsiderHarassment?: number;
  entranceCoachingFeasibility?: number;
  preparationToGoAbroad?: number;

  // === Demographics (optional) ===
  patientDensity?: number;
  doctorDensity?: number;
  jobVacancyDensity?: number;
  pharmaRepDensity?: number;
  schoolingForKids?: number;
  internet?: number;
  cost?: number;

  // === Search Support ===
  searchTokens: string[];        // Auto-generated lowercase tokens for full-text search
                                 // e.g., ["aiims", "new", "delhi", "mbbs", "internal", "medicine"]

  // === Metadata ===
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

### Key Schema Decisions

1. **`_lower` fields**: Firestore queries are case-sensitive. Instead of relying on client-side toLowerCase(), store pre-lowered versions for queries. Display the original-case version in UI.

2. **`specialty` is a SINGLE value**: Instead of `"Internal Medicine, Community Medicine, Dermatology"`, create **separate documents** for each specialty. This is denormalized but makes queries exact and fast.

3. **`latitude`/`longitude` are NUMBERS**: Current data stores them as strings (`"28.567171"`). Store as numbers to avoid `parseFloat()` everywhere.

4. **`searchTokens` is auto-generated**: During write, tokenize the hospital name, state, district, and specialty into lowercase tokens. No manual curation needed.

### `searchTokens` Generation Function

```typescript
function generateSearchTokens(record: Partial<SalaryRecord>): string[] {
  const tokens = new Set<string>();
  
  const fields = [
    record.hospitalName,
    record.state,
    record.district,
    record.degree,
    record.specialty,
    record.workplace,
    record.address
  ];

  for (const field of fields) {
    if (!field) continue;
    const lower = field.toLowerCase().trim();
    
    // Full field value
    tokens.add(lower);
    
    // Individual words
    lower.split(/\s+/).forEach(word => {
      if (word.length >= 2) tokens.add(word);
    });
    
    // Common abbreviations
    const words = lower.split(/\s+/);
    if (words.length > 1) {
      // First-letter abbreviation: "All India Institute" → "aii"
      tokens.add(words.map(w => w[0]).join(''));
    }
  }

  // Known abbreviations (configurable)
  const abbreviations: Record<string, string[]> = {
    'all india institute of medical sciences': ['aiims'],
    'christian medical college': ['cmc'],
    'government medical college': ['gmc'],
    'postgraduate institute': ['pgi'],
    'jawaharlal institute': ['jipmer'],
  };

  const fullName = (record.hospitalName || '').toLowerCase();
  for (const [key, abbrs] of Object.entries(abbreviations)) {
    if (fullName.includes(key)) {
      abbrs.forEach(a => tokens.add(a));
    }
  }

  return Array.from(tokens);
}
```

---

## 4. Index Strategy

### Required Composite Indexes

With a single collection, you need FAR fewer indexes. Here are the essential ones:

| # | Fields | Purpose |
|---|--------|---------|
| 1 | `country` + `state` + `degree` | Filter by country → state → degree |
| 2 | `state` + `district` + `degree` | Filter by state → district → degree |
| 3 | `state` + `degree` + `specialty_lower` | Filter by state → degree → specialty |
| 4 | `degree` + `specialty_lower` | Filter by degree → specialty (all locations) |
| 5 | `state` + `district` | Filter by state → district (all degrees) |
| 6 | `searchTokens` + `degree` | Search + degree filter (Array Contains + Equality) |
| 7 | `searchTokens` + `state` | Search + state filter |

### Firestore Indexes Config (`firestore.indexes.json`)

```json
{
  "indexes": [
    {
      "collectionGroup": "salary_records",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "country", "order": "ASCENDING" },
        { "fieldPath": "state", "order": "ASCENDING" },
        { "fieldPath": "degree", "order": "ASCENDING" }
      ]
    },
    {
      "collectionGroup": "salary_records",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "state", "order": "ASCENDING" },
        { "fieldPath": "district", "order": "ASCENDING" },
        { "fieldPath": "degree", "order": "ASCENDING" }
      ]
    },
    {
      "collectionGroup": "salary_records",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "state", "order": "ASCENDING" },
        { "fieldPath": "degree", "order": "ASCENDING" },
        { "fieldPath": "specialty_lower", "order": "ASCENDING" }
      ]
    },
    {
      "collectionGroup": "salary_records",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "degree", "order": "ASCENDING" },
        { "fieldPath": "specialty_lower", "order": "ASCENDING" }
      ]
    },
    {
      "collectionGroup": "salary_records",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "searchTokens", "arrayConfig": "CONTAINS" },
        { "fieldPath": "degree", "order": "ASCENDING" }
      ]
    },
    {
      "collectionGroup": "salary_records",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "searchTokens", "arrayConfig": "CONTAINS" },
        { "fieldPath": "state", "order": "ASCENDING" }
      ]
    }
  ]
}
```

**Total indexes needed: 6-8** (vs. current 16+ collection group indexes that still don't cover all cases)

---

## 5. Data Fetching Rewrite

### New Query Flow (Single Request!)

```
User clicks "Apply Filters"
  │
  ├─→ Build ONE Firestore query with all active filters
  │     where("country", "==", "India")
  │     where("state", "==", "Kerala")
  │     where("degree", "==", "MD")
  │     where("specialty_lower", "==", "internal medicine")
  │     limit(200)
  │
  ├─→ Execute query                 (1 request! ✅)
  │
  ├─→ Map results to SalaryData     (no dedup needed — each doc is unique)
  │
  └─→ Set mapData (render markers)

  Total: 1 Firestore request  ✅
```

### New `fetchFilteredData()` Implementation

```typescript
const fetchFilteredData = async (cursor?: DocumentSnapshot) => {
  setLoading(true);
  
  try {
    const salaryRef = collection(doctorSalaryDb, 'salary_records');
    const constraints: QueryConstraint[] = [];

    // === Build query from active filters ===
    
    // Country
    if (selectedCountry !== "All") {
      constraints.push(where("country", "==", selectedCountry));
    }

    // State
    if (selectedState !== "All") {
      constraints.push(where("state", "==", selectedState));
    }

    // District
    if (selectedDistrict !== "All") {
      constraints.push(where("district", "==", selectedDistrict));
    }

    // Degree
    if (selectedDegree !== "All") {
      constraints.push(where("degree", "==", selectedDegree));
    }

    // Specialty
    if (selectedSpecialty !== "All") {
      constraints.push(
        where("specialty_lower", "==", selectedSpecialty.toLowerCase().trim())
      );
    }

    // Workplace (now queryable server-side!)
    if (selectedWorkplace !== "All") {
      constraints.push(
        where("workplace_lower", "==", selectedWorkplace.toLowerCase().trim())
      );
    }

    // Search query (uses searchTokens)
    if (searchQuery.trim()) {
      const token = searchQuery.toLowerCase().trim();
      constraints.push(where("searchTokens", "array-contains", token));
    }

    // Pagination cursor
    if (cursor) {
      constraints.push(startAfter(cursor));
    }

    // Always limit to prevent excessive reads
    constraints.push(limit(500));

    // === Execute single query ===
    const q = query(salaryRef, ...constraints);
    const snapshot = await getDocs(q);

    const results: SalaryData[] = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      results.push({
        id: doc.id,
        lat: data.latitude,        // Already a number!
        lng: data.longitude,       // Already a number!
        hospital: data.hospitalName,
        location: `${data.district}, ${data.state}`,
        state: data.state,
        district: data.district,
        salary: `₹${data.averageSalary?.toLocaleString() || 'N/A'}`,
        specialty: data.specialty,
        degree: data.degree,
        averageSalary: data.averageSalary,
        qualityOfLife: data.qualityOfLife,
        toxicity: data.toxicity,
        workHecticity: data.workHecticity,
        country: data.country,
        currency: data.currency,
        // ... other fields
      });
    });

    // No client-side filtering needed! Server did it all.
    setMapData(prev => cursor ? [...prev, ...results] : results);
    
    // Store last doc for pagination
    if (snapshot.docs.length > 0) {
      setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
    }

  } catch (error) {
    console.error("Error fetching data:", error);
    setMapData([]);
  } finally {
    setLoading(false);
  }
};
```

### Key Improvements

| Current | Proposed |
|---------|----------|
| 26+ separate queries | **1 query** |
| 4-stage fallback per collection | **No fallbacks** (single collection always works) |
| Client-side degree/specialty/state filtering | **All filtering server-side** |
| O(n²) deduplication loop | **No dedup needed** (unique docs) |
| No pagination | **Cursor-based pagination** |
| `parseFloat(data.latitude)` | **Already a number** |

---

## 6. Search Improvements

### Current Search Problems

1. `searchKeywords` is manually curated with inconsistent entries
2. `array-contains` only matches exact tokens — searching "aiim" won't match "aiims"
3. No support for multi-word search ("AIIMS Delhi" treated as one token)

### Proposed Search Strategy

#### Level 1: Token-Based Search (Built-in)

```typescript
// User searches: "aiims delhi"
// Split into tokens and query the most specific one
const tokens = searchQuery.toLowerCase().split(/\s+/);
const primaryToken = tokens[0]; // "aiims"

const q = query(
  collection(db, 'salary_records'),
  where("searchTokens", "array-contains", primaryToken),
  limit(100)
);

// Then client-side filter for additional tokens
const results = snapshot.docs.filter(doc => {
  const data = doc.data();
  return tokens.every(token => 
    data.searchTokens.includes(token)
  );
});
```

#### Level 2: Prefix Search (Better UX)

For autocomplete / "type-ahead" search:

```typescript
// Store prefix tokens during write:
// "aiims" → ["a", "ai", "aii", "aiim", "aiims"]
// (Only store prefixes of length ≥ 3 to keep array manageable)

function generatePrefixTokens(word: string): string[] {
  const prefixes: string[] = [];
  for (let i = 3; i <= word.length; i++) {
    prefixes.push(word.substring(0, i));
  }
  return prefixes;
}

// Add a `searchPrefixes` field alongside `searchTokens`
// Query: where("searchPrefixes", "array-contains", "aiim")
// This matches "aiims", "aiims delhi", etc.
```

#### Level 3: Full-Text Search (Production Scale)

For production-grade search, consider integrating:

| Option | Pros | Cons |
|--------|------|------|
| **Algolia** | Best search UX, typo tolerance, facets | Paid service ($), external dependency |
| **Typesense** | Open-source alternative, self-hostable | Requires separate server |
| **Firebase Extensions - Algolia** | One-click setup, auto-syncs | Lower flexibility |
| **Meilisearch** | Fast, typo-tolerant, easy setup | Separate hosting needed |

**Recommendation:** Start with Level 1 (token search) + Level 2 (prefix search). These are free and built into Firestore. Only move to Level 3 if you have 10,000+ records and need fuzzy matching.

---

## 7. Migration Plan

### Phase 1: Create the Migration Script

```typescript
// scripts/migrateToFlatCollection.ts

import { collection, getDocs, writeBatch, doc, collectionGroup } from 'firebase/firestore';
import { doctorSalaryDb } from '../src/lib/firebase-doctor-salary';

const BATCH_SIZE = 500;

async function migrate() {
  const seen = new Set<string>();  // Dedup key: "hospitalName|degree|specialty"
  let totalMigrated = 0;
  let totalSkipped = 0;

  // Step 1: Read all docs from metrics and all subcollections
  const collections = [
    'metrics', 'MBBS', 'MD', 'MS', 'DM', 'MCh',
    'General Surgery', 'Ophthalmology', 'Orthopedics', 'Otorhinolaryngology',
    'Anesthesiology', 'Community Medicine', 'Dermatology', 'Emergency Medicine',
    'Internal Medicine', 'Microbiology', 'Pathology', 'Pediatrics', 'Radiology',
    'Cardiology', 'Neurology', 'Gastroenterology', 'Nephrology', 'Urology',
    'Neurosurgery', 'GP or Freelance'
  ];

  let batch = writeBatch(doctorSalaryDb);
  let batchCount = 0;

  for (const colName of collections) {
    console.log(`\n📦 Processing collection: ${colName}`);
    
    try {
      // Try collectionGroup first (gets subcollection docs)
      const snapshot = await getDocs(collectionGroup(doctorSalaryDb, colName));
      
      for (const docSnap of snapshot.docs) {
        const data = docSnap.data();
        
        // Skip docs without coordinates
        if (!data.latitude || !data.longitude) {
          totalSkipped++;
          continue;
        }

        // Handle comma-separated specialties by splitting
        const specialties = (data.specialty || 'General')
          .split(',')
          .map((s: string) => s.trim())
          .filter((s: string) => s.length > 0);

        for (const specialty of specialties) {
          const hospitalName = (data.name || data.hospital_name || data.workplace || 'Unknown').trim();
          const degree = (data.degree || colName).trim();
          const state = (data.state || '').trim();
          const district = (data.district || '').trim();
          
          // Dedup key
          const key = `${hospitalName}|${degree}|${specialty}|${state}`.toLowerCase();
          if (seen.has(key)) {
            totalSkipped++;
            continue;
          }
          seen.add(key);

          // Build new document
          const newDoc = {
            hospitalName,
            hospitalName_lower: hospitalName.toLowerCase(),
            address: (data.address || '').trim(),
            state,
            state_lower: state.toLowerCase(),
            district,
            district_lower: district.toLowerCase(),
            country: data.country || 'India',
            latitude: typeof data.latitude === 'string' ? parseFloat(data.latitude) : data.latitude,
            longitude: typeof data.longitude === 'string' ? parseFloat(data.longitude) : data.longitude,
            degree,
            degree_lower: degree.toLowerCase(),
            specialty: specialty,
            specialty_lower: specialty.toLowerCase(),
            workplace: (data.workplace || '').trim(),
            workplace_lower: (data.workplace || '').toLowerCase().trim(),
            averageSalary: data.average_salary || 0,
            lowestSalary: data.lowest_salary || null,
            highestSalary: data.highest_salary || null,
            qualityOfLife: data.quality_of_life ?? null,
            toxicity: data.toxicity ?? null,
            workHecticity: data.work_hecticity ?? null,
            outsiderHarassment: data.outsider_harassment ?? null,
            entranceCoachingFeasibility: data.entrance_coaching_feasibility ?? null,
            preparationToGoAbroad: data.preparation_to_go_abroad ?? null,
            patientDensity: data.patient_density ?? null,
            doctorDensity: data.doctor_density ?? null,
            jobVacancyDensity: data.job_vacancy_density ?? null,
            pharmaRepDensity: data.pharma_rep_density ?? null,
            schoolingForKids: data.schooling_for_kids ?? null,
            internet: data.internet ?? null,
            cost: data.cost ?? null,
            searchTokens: generateSearchTokens({
              hospitalName, state, district, degree, specialty,
              workplace: data.workplace, address: data.address
            }),
            createdAt: data.createdAt || new Date(),
            updatedAt: new Date(),
          };

          const newDocRef = doc(collection(doctorSalaryDb, 'salary_records'));
          batch.set(newDocRef, newDoc);
          batchCount++;
          totalMigrated++;

          // Commit batch every 500 docs
          if (batchCount >= BATCH_SIZE) {
            await batch.commit();
            console.log(`  ✅ Committed batch (${totalMigrated} total)`);
            batch = writeBatch(doctorSalaryDb);
            batchCount = 0;
          }
        }
      }
    } catch (err) {
      console.warn(`  ⚠️ Failed collectionGroup for ${colName}, trying root...`);
      // Fallback to root collection
      try {
        const snapshot = await getDocs(collection(doctorSalaryDb, colName));
        // ... same processing logic
      } catch (err2) {
        console.error(`  ❌ Skipping ${colName}:`, err2);
      }
    }
  }

  // Commit remaining docs
  if (batchCount > 0) {
    await batch.commit();
  }

  console.log('\n=== Migration Complete ===');
  console.log(`Total migrated: ${totalMigrated}`);
  console.log(`Total skipped (no coords / duplicates): ${totalSkipped}`);
}

migrate().catch(console.error);
```

### Phase 2: Deploy Indexes

```bash
# Create firestore.indexes.json (see Section 4) then:
firebase deploy --only firestore:indexes
```

### Phase 3: Update DoctorMap.tsx

1. Replace the entire `fetchFilteredData()` with the new single-query version (see Section 5)
2. Remove `allDegreeCollections` array
3. Remove the 4-stage fallback system
4. Remove client-side degree/specialty/state/district/workplace filtering
5. Keep `mapDocToSalaryData` but simplify (no `parseFloat`, no `trim()` — data is clean at write time)

### Phase 4: Validate & Cutover

```
1. Run migration script                       ← Populates salary_records
2. Deploy new indexes                          ← Takes 5-15 min to build
3. Switch DoctorMap to read from salary_records
4. Verify all filters work correctly
5. (Optional) Keep old collections read-only as backup for 30 days
6. (Optional) Delete old collections
```

---

## 8. Cost & Performance Impact

### Firestore Reads

| Scenario | Current | Proposed | Savings |
|----------|---------|----------|---------|
| Initial page load (no filters) | ~26 queries × avg 50 docs = **~1,300 reads** | 1 query × 500 docs = **500 reads** | **62% fewer reads** |
| Filtered (state + degree) | ~26 queries (most return 0) = **~26 reads** | 1 query = **1 read** | **96% fewer reads** |
| Search query | ~26 queries + metrics = **~27 reads** | 1 query = **1 read** | **96% fewer reads** |

### Latency

| Scenario | Current (est.) | Proposed (est.) |
|----------|---------------|-----------------|
| Initial load | 3-8 seconds (26 sequential/parallel queries + fallbacks) | **< 1 second** (1 query) |
| Filter change | 2-5 seconds | **< 500ms** |
| Search | 2-5 seconds | **< 500ms** |

### Storage

| | Current | Proposed |
|--|---------|----------|
| Documents | ~500 across 25+ collections (many duplicates) | ~300-400 unique documents (deduplicated) |
| Indexes | 16+ composite indexes (many incomplete) | 6-8 composite indexes (complete coverage) |
| `searchTokens` overhead | ~15-25 keywords per doc (manually curated) | ~10-20 auto-generated tokens per doc |

---

## Summary

```
┌─────────────────────────────────┐     ┌─────────────────────────────────┐
│        CURRENT SYSTEM           │     │       PROPOSED SYSTEM           │
│                                 │     │                                 │
│  25+ collections                │     │  1 collection: salary_records   │
│  4-stage fallback per query     │ ──→ │  1 query, no fallbacks          │
│  Manual searchKeywords          │     │  Auto-generated searchTokens    │
│  Heavy client-side filtering    │     │  All filtering server-side      │
│  Inconsistent field formats     │     │  Clean schema at write time     │
│  No pagination                  │     │  Cursor-based pagination        │
│  26+ network requests/load      │     │  1 network request/load         │
│  3-8s load time                 │     │  < 1s load time                 │
│                                 │     │                                 │
└─────────────────────────────────┘     └─────────────────────────────────┘
```

**Recommended order of execution:**

1. ✅ Create `firestore.indexes.json` and deploy indexes (they take time to build)
2. ✅ Write and test migration script on a staging Firebase project first  
3. ✅ Run migration on production
4. ✅ Update `DoctorMap.tsx` to use new single-query approach
5. ✅ Remove old fallback code, static data references, and unused imports
6. ✅ Test all filter combinations
7. ✅ Monitor Firestore usage dashboard for read count reduction
