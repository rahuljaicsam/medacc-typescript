# Doctor Map Data Fetching Logic

This document explains the data fetching strategy used in `DoctorMap.tsx`.

## Architecture Overview

The component uses a **two-tier fetching strategy**:

1. **Primary (New Schema)**: Queries the flat `salary_records` collection — **1 query, all filtering server-side**
2. **Fallback (Legacy Schema)**: Falls back to the old multi-collection approach if `salary_records` is empty (during migration transition)

## New Schema: `salary_records` Collection

All salary data lives in a single flat collection. Each document represents one **Hospital × Degree × Specialty** combination.

### How It Works

```
User clicks "Apply Filters"
  │
  ├→ Build ONE Firestore query with all active filters
  │     where("country", "==", "India")
  │     where("state", "==", "Kerala")
  │     where("degree", "==", "MD")
  │     where("specialty_lower", "==", "internal medicine")
  │     limit(500)
  │
  ├→ Execute query                 (1 Firestore request ✅)
  │
  ├→ Map results to SalaryData     (no dedup needed — each doc is unique)
  │
  └→ Set mapData (render markers)
```

### Key Features

- **Server-side filtering** for ALL filter types: country, state, district, degree, specialty, workplace
- **`searchTokens` array** with `array-contains` for search queries
- **Multi-token search**: Server filters on the first token, client refines with additional tokens
- **`_lower` fields**: Case-insensitive matching without client-side normalization
- **No deduplication needed**: Each document is a unique hospital-degree-specialty combination

### Document Schema

```typescript
{
  hospitalName: string;        // Display name
  hospitalName_lower: string;  // For search
  state: string;
  state_lower: string;
  district: string;
  district_lower: string;
  country: string;
  latitude: number;            // Stored as NUMBER (not string)
  longitude: number;
  degree: string;
  degree_lower: string;
  specialty: string;
  specialty_lower: string;
  workplace: string;
  workplace_lower: string;
  averageSalary: number;
  searchTokens: string[];      // Auto-generated lowercase tokens
  // ... quality metrics, demographics, etc.
}
```

## Legacy Fallback

If the `salary_records` collection returns 0 results, the component automatically falls back to the old multi-collection approach:

1. Queries `metrics` collection
2. Queries 25+ degree/specialty collections (MBBS, MD, MS, General Surgery, etc.)
3. Uses `searchKeywords` array-contains for location filtering
4. Client-side filtering for degree, specialty, state, district, workplace

This fallback is **temporary** and will be removed once migration is complete.

## Client-Side Filtering

With the new schema, client-side filtering is **minimal**:

- **Search**: Only for multi-token refinement (2nd+ tokens after server-side `array-contains` on 1st token)
- **Other filters**: Simple equality checks (degree, specialty, state, district, workplace) — these serve as a safety net for edge cases

## Migration

See `FIREBASE_RESTRUCTURE_PLAN.md` for the full migration plan and `src/scripts/migrateToSalaryRecords.ts` for the migration script.
