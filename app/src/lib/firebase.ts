import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQFMHFA1MdGy55TbfT2U-aO6iYESIqdiM",
  authDomain: "startup-1666a.firebaseapp.com",
  databaseURL: "https://startup-1666a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "startup-1666a",
  storageBucket: "startup-1666a.appspot.com",
  messagingSenderId: "1074410421220",
  appId: "1:1074410421220:web:37897072d2bf05d162a5f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
