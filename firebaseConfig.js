
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAd8v5jN3FJvQTzsb5OyRUs32whbzWUeFI",
  authDomain: "rummans-portfolio.firebaseapp.com",
  databaseURL: "https://rummans-portfolio-default-rtdb.firebaseio.com",
  projectId: "rummans-portfolio",
  storageBucket: "rummans-portfolio.appspot.com",
  messagingSenderId: "433580968726",
  appId: "1:433580968726:web:7bc6f2f335da6f47255e37",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const db = getDatabase(app);
export const auth = getAuth(app); // Firebase Auth
