// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "chatterbox-a57e5.firebaseapp.com",
  projectId: "chatterbox-a57e5",
  storageBucket: "chatterbox-a57e5.appspot.com",
  messagingSenderId: "26365651276",
  appId: "1:26365651276:web:9615920afdc11e0d8d87e9",
  measurementId: "G-0VDVYZZGY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (optional and ensure it is supported in the environment)
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const database = getFirestore(app);
