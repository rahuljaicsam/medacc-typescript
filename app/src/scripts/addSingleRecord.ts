/**
 * Helper script to add a single record to the flattened `salary_records` collection.
 * 
 * Run: npx tsx src/scripts/addSingleRecord.ts
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

// ─── Firebase Config ───
const firebaseConfig = {
    apiKey: "AIzaSyAr818DjUuunh7HLjwegvJ9FGZ32UslClQ",
    authDomain: "doctor-salary-d5c69.firebaseapp.com",
    projectId: "doctor-salary-d5c69",
    storageBucket: "doctor-salary-d5c69.appspot.com",
    messagingSenderId: "343000648922",
    appId: "1:343000648922:web:143821f3fb846bec8669e3",
};

const app = initializeApp(firebaseConfig, "insertApp");
const db = getFirestore(app);

// ─── Search Token Generator (Same as migration script) ───
function generateSearchTokens(fields: Record<string, string | undefined>): string[] {
    const tokens = new Set<string>();

    for (const value of Object.values(fields)) {
        if (!value) continue;
        const lower = value.toLowerCase().trim();
        if (!lower) continue;

        tokens.add(lower);
        lower.split(/[\s,]+/).forEach(word => {
            const clean = word.replace(/[^a-z0-9]/g, '');
            if (clean.length >= 2) tokens.add(clean);
        });
    }

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

    return Array.from(tokens).slice(0, 30);
}

// ─── Data to Insert ───
const recordData = {
    address: "Christian Medical College, IDA Scudder Rd, Vellore, Tamil Nadu 632004",
    averageSalary: 70000,
    country: "India",
    degree: "MD",
    degree_lower: "md",
    district: "Vellore",
    district_lower: "vellore",
    hospitalName: "Christian Medical College Vellore",
    hospitalName_lower: "christian medical college vellore",
    latitude: 12.924871,
    longitude: 79.136007,
    qualityOfLife: 4,
    specialty: "Dermatology",
    specialty_lower: "dermatology",
    state: "Tamil Nadu",
    state_lower: "tamil nadu",
    toxicity: 7,
    workHecticity: 9,
    workplace: "Tertiary Hospital",
    workplace_lower: "tertiary hospital",
};

async function insertRecord() {
    console.log("🚀 Inserting record into salary_records...");

    try {
        const finalDoc = {
            ...recordData,
            searchTokens: generateSearchTokens({
                hospitalName: recordData.hospitalName,
                state: recordData.state,
                district: recordData.district,
                degree: recordData.degree,
                specialty: recordData.specialty,
                workplace: recordData.workplace,
                address: recordData.address,
            }),
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
        };

        const docRef = await addDoc(collection(db, 'salary_records'), finalDoc);
        console.log(`✅ Success! Document written with ID: ${docRef.id}`);
    } catch (error) {
        console.error("❌ Error adding document: ", error);
    }
}

insertRecord().then(() => {
    console.log("Insertion attempt finished.");
    process.exit(0);
});
