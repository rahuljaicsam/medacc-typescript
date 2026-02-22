/**
 * Migration Script: Flatten multi-collection Firebase data into a single `salary_records` collection.
 *
 * This script reads from:
 *   - metrics/  (top-level hospital docs)
 *   - 25+ degree/specialty subcollections (MBBS, MD, General Surgery, etc.)
 *
 * And writes deduplicated, normalized documents into:
 *   - salary_records/
 *
 * Run: npx tsx src/scripts/migrateToSalaryRecords.ts
 */

import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    collectionGroup,
    getDocs,
    writeBatch,
    doc,
    query,
    limit
} from 'firebase/firestore';

// ─── Firebase Config ───
const firebaseConfig = {
    apiKey: "AIzaSyAr818DjUuunh7HLjwegvJ9FGZ32UslClQ",
    authDomain: "doctor-salary-d5c69.firebaseapp.com",
    projectId: "doctor-salary-d5c69",
    storageBucket: "doctor-salary-d5c69.appspot.com",
    messagingSenderId: "343000648922",
    appId: "1:343000648922:web:143821f3fb846bec8669e3",
};

const app = initializeApp(firebaseConfig, "migrationApp");
const db = getFirestore(app);

// ─── All collections to read from ───
const SOURCE_COLLECTIONS = [
    "metrics",
    // Degrees
    "MBBS", "MD", "MS", "DM", "MCh",
    // MS Specialties
    "General Surgery", "Ophthalmology", "Orthopedics", "Otorhinolaryngology",
    // MD Specialties
    "Anesthesiology", "Community Medicine", "Dermatology", "Emergency Medicine",
    "Internal Medicine", "Microbiology", "Pathology", "Pediatrics", "Radiology",
    // Super Specialties
    "Cardiology", "Neurology", "Gastroenterology", "Nephrology", "Urology", "Neurosurgery",
    // Others
    "GP or Freelance"
];

const BATCH_SIZE = 400;

// ─── Search Token Generator ───
function generateSearchTokens(fields: Record<string, string | undefined>): string[] {
    const tokens = new Set<string>();

    for (const value of Object.values(fields)) {
        if (!value) continue;
        const lower = value.toLowerCase().trim();
        if (!lower) continue;

        // Full field value
        tokens.add(lower);

        // Individual words (min 2 chars)
        lower.split(/[\s,]+/).forEach(word => {
            const clean = word.replace(/[^a-z0-9]/g, '');
            if (clean.length >= 2) tokens.add(clean);
        });
    }

    // Known abbreviations
    const hospitalName = (fields.hospitalName || '').toLowerCase();
    const abbreviations: Record<string, string[]> = {
        'all india institute of medical sciences': ['aiims'],
        'christian medical college': ['cmc'],
        'government medical college': ['gmc'],
        'postgraduate institute': ['pgi'],
        'armed forces medical college': ['afmc'],
        'king george': ['kgmu'],
        'stanley medical college': ['smc'],
        'madras medical college': ['mmc'],
        'grant medical college': ['grant'],
    };

    for (const [key, abbrs] of Object.entries(abbreviations)) {
        if (hospitalName.includes(key)) {
            abbrs.forEach(a => tokens.add(a));
        }
    }

    return Array.from(tokens).slice(0, 30); // Cap at 30 tokens to stay within Firestore limits
}

// ─── Migration ───
async function migrate() {
    const seen = new Set<string>(); // Dedup: "hospitalName|degree|specialty|state"
    let totalMigrated = 0;
    let totalSkipped = 0;
    let totalErrors = 0;

    let batch = writeBatch(db);
    let batchCount = 0;

    async function commitBatch() {
        if (batchCount > 0) {
            await batch.commit();
            console.log(`  ✅ Committed batch (${totalMigrated} total migrated)`);
            batch = writeBatch(db);
            batchCount = 0;
        }
    }

    for (const colName of SOURCE_COLLECTIONS) {
        console.log(`\n📦 Processing: ${colName}`);
        let snapshot;

        try {
            // Try collectionGroup first (finds subcollection docs)
            if (colName !== 'metrics') {
                snapshot = await getDocs(collectionGroup(db, colName));
            } else {
                snapshot = await getDocs(collection(db, 'metrics'));
            }
        } catch {
            // Fallback to root collection
            try {
                snapshot = await getDocs(query(collection(db, colName), limit(500)));
            } catch (err2) {
                console.error(`  ❌ Cannot read ${colName}:`, err2);
                totalErrors++;
                continue;
            }
        }

        console.log(`  📄 Found ${snapshot.size} docs`);

        for (const docSnap of snapshot.docs) {
            const data = docSnap.data();

            // Skip docs without coordinates
            const lat = data.latitude ? (typeof data.latitude === 'string' ? parseFloat(data.latitude) : data.latitude) : null;
            const lng = data.longitude ? (typeof data.longitude === 'string' ? parseFloat(data.longitude) : data.longitude) : null;

            if (!lat || !lng || isNaN(lat) || isNaN(lng)) {
                totalSkipped++;
                continue;
            }

            // Determine hospital name from various possible fields
            const hospitalName = (data.name || data.workplace || data.hospital || data.hospital_name || 'Unknown Hospital').trim();

            // Determine degree — from doc field, or infer from collection name
            let degree = (data.degree || '').trim();
            if (!degree || degree === '') {
                // If this doc came from a degree collection, use that as the degree
                if (['MBBS', 'MD', 'MS', 'DM', 'MCh'].includes(colName)) {
                    degree = colName;
                } else {
                    degree = 'MBBS'; // Default
                }
            }

            // Handle specialty — might be comma-separated, split into individual docs
            const rawSpecialty = (data.specialty || 'General').trim();
            const specialties = rawSpecialty
                .split(',')
                .map((s: string) => s.trim())
                .filter((s: string) => s.length > 0);

            // If this is a specialty collection (e.g., "General Surgery", "Dermatology"),
            // AND the specialty field is generic, use the collection name as specialty
            const isSpecialtyCollection = ![
                'metrics', 'MBBS', 'MD', 'MS', 'DM', 'MCh', 'GP or Freelance'
            ].includes(colName);

            if (isSpecialtyCollection && (specialties.length === 0 || (specialties.length === 1 && specialties[0] === 'General'))) {
                specialties.length = 0;
                specialties.push(colName);
            }

            const state = (data.state || '').trim();
            const district = (data.district || '').trim();
            const workplace = (data.workplace || '').trim();
            const address = (data.address || '').trim();

            for (const specialty of specialties) {
                // Dedup key
                const key = `${hospitalName}|${degree}|${specialty}|${state}`.toLowerCase();
                if (seen.has(key)) {
                    totalSkipped++;
                    continue;
                }
                seen.add(key);

                // Build new normalized document
                const newDoc: Record<string, any> = {
                    // Identity
                    hospitalName,
                    hospitalName_lower: hospitalName.toLowerCase(),
                    address,

                    // Location
                    state,
                    state_lower: state.toLowerCase(),
                    district,
                    district_lower: district.toLowerCase(),
                    country: data.country || 'India',
                    latitude: lat,
                    longitude: lng,

                    // Medical classification
                    degree,
                    degree_lower: degree.toLowerCase(),
                    specialty,
                    specialty_lower: specialty.toLowerCase(),
                    workplace,
                    workplace_lower: workplace.toLowerCase(),

                    // Salary
                    averageSalary: data.average_salary || 0,
                    lowestSalary: data.lowest_salary || null,
                    highestSalary: data.highest_salary || null,

                    // Degree-specific salaries (carried over for backwards compatibility)
                    mbbs_average_salary: data.mbbs_average_salary || null,
                    md_average_salary: data.md_average_salary || null,
                    ms_average_salary: data.ms_average_salary || null,
                    dm_average_salary: data.dm_average_salary || null,
                    mch_average_salary: data.mch_average_salary || null,

                    // Quality metrics
                    qualityOfLife: data.quality_of_life ?? null,
                    toxicity: data.toxicity ?? null,
                    workHecticity: data.work_hecticity ?? null,
                    outsiderHarassment: data.outsider_harassment ?? null,
                    entranceCoachingFeasibility: data.entrance_coaching_feasibility ?? null,
                    preparationToGoAbroad: data.preparation_to_go_abroad ?? null,

                    // Demographics
                    patientDensity: data.patient_density ?? null,
                    doctorDensity: data.doctor_density ?? null,
                    jobVacancyDensity: data.job_vacancy_density ?? null,
                    pharmaRepDensity: data.pharma_rep_density ?? null,
                    schoolingForKids: data.schooling_for_kids ?? null,
                    internet: data.internet ?? null,
                    cost: data.cost ?? null,

                    // Search
                    searchTokens: generateSearchTokens({
                        hospitalName,
                        state,
                        district,
                        degree,
                        specialty,
                        workplace,
                        address,
                    }),

                    // Metadata
                    createdAt: data.createdAt || new Date(),
                    updatedAt: new Date(),
                    _sourceCollection: colName, // Track where this originated
                    _sourceDocId: docSnap.id,
                };

                // Remove null values to save storage
                for (const [k, v] of Object.entries(newDoc)) {
                    if (v === null) delete newDoc[k];
                }

                const newDocRef = doc(collection(db, 'salary_records'));
                batch.set(newDocRef, newDoc);
                batchCount++;
                totalMigrated++;

                if (batchCount >= BATCH_SIZE) {
                    await commitBatch();
                }
            }
        }
    }

    // Commit remaining
    await commitBatch();

    console.log('\n═══════════════════════════════════════');
    console.log('          MIGRATION COMPLETE');
    console.log('═══════════════════════════════════════');
    console.log(`✅ Total migrated:     ${totalMigrated}`);
    console.log(`⏭️  Total skipped:      ${totalSkipped} (no coords / duplicates)`);
    console.log(`❌ Total errors:       ${totalErrors}`);
    console.log(`📦 Unique dedup keys:  ${seen.size}`);
    console.log('═══════════════════════════════════════');
}

migrate().catch(console.error);
