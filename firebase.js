import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSea3BQvwCcySrBhmu6WBz0IMB-xUpWyY",
  authDomain: "studio-9443534360-c637d.firebaseapp.com",
  projectId: "studio-9443534360-c637d",
  storageBucket: "studio-9443534360-c637d.firebasestorage.app",
  messagingSenderId: "124500097842",
  appId: "1:124500097842:web:7e061b1b951c835964b52b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
