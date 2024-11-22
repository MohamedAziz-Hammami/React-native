// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVBb2ZuriHoXn-iw-odJ5xrXtjCeSbOY4",
  authDomain: "reactfirebase-1bfd8.firebaseapp.com",
  projectId: "reactfirebase-1bfd8",
  storageBucket: "reactfirebase-1bfd8.firebasestorage.app",
  messagingSenderId: "439941473899",
  appId: "1:439941473899:web:213333e6baf31f45a5332e",
  measurementId: "G-L0VF3B4603"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
const auth = getAuth(app);
export { auth };
