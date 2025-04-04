// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgWQzv7cZAUc9NW9ckgQ5OhqD9L5EX-Dc",
  authDomain: "interveiwnest.firebaseapp.com",
  projectId: "interveiwnest",
  storageBucket: "interveiwnest.firebasestorage.app",
  messagingSenderId: "144315371900",
  appId: "1:144315371900:web:a81ad4a721ddc95dc054f9",
  measurementId: "G-XWYVRKBV6D",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
