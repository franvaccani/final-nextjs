// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAuxgivHKunh27tFTxKB-2YBemrS1f1QpM",
  authDomain: "proyecto-next-coder.firebaseapp.com",
  projectId: "proyecto-next-coder",
  storageBucket: "proyecto-next-coder.firebasestorage.app",
  messagingSenderId: "587809294088",
  appId: "1:587809294088:web:7ac4535818e64f66884ebd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);