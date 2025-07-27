import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-_AAFapRTNbTc6pNDtZrXVfjtcyZnx2E",
  authDomain: "login-522ad.firebaseapp.com",
  projectId: "login-522ad",
  storageBucket: "login-522ad.firebasestorage.app",
  messagingSenderId: "689894716124",
  appId: "1:689894716124:web:5caed083b95c7cd2b97a19",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)