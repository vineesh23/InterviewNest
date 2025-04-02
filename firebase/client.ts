// Import the functions you need from the SDKs you need
import { initializeApp,getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOvC7vQZBlPbNN8Ec30u5Jwc_8lrCgY8o",
  authDomain: "interviewnest-a0e1a.firebaseapp.com",
  projectId: "interviewnest-a0e1a",
  storageBucket: "interviewnest-a0e1a.firebasestorage.app",
  messagingSenderId: "160874250904",
  appId: "1:160874250904:web:7904119da1d40ac03986ed",
  measurementId: "G-VR9QR43H2Y"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);