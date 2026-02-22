import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration for Doctor Salary project
const firebaseConfig = {
  apiKey: "AIzaSyAr818DjUuunh7HLjwegvJ9FGZ32UslClQ",
  authDomain: "doctor-salary-d5c69.firebaseapp.com",
  projectId: "doctor-salary-d5c69",
  storageBucket: "doctor-salary-d5c69.appspot.com",
  messagingSenderId: "343000648922",
  appId: "1:343000648922:web:143821f3fb846bec8669e3",
  measurementId: "G-WXRYMW0ZCP"
};

// Initialize Firebase (secondary app to avoid conflict with default app)
const doctorSalaryApp = initializeApp(firebaseConfig, "doctorSalaryApp");

// Initialize Firestore
export const doctorSalaryDb = getFirestore(doctorSalaryApp);

export default doctorSalaryApp;
