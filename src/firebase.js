// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXTGJsE-O1qVe9_fl0TQasMcyQqFmE-JU",
  authDomain: "react-mydictionary-74a24.firebaseapp.com",
  projectId: "react-mydictionary-74a24",
  storageBucket: "react-mydictionary-74a24.appspot.com",
  messagingSenderId: "4853238441",
  appId: "1:4853238441:web:d60cc8891f54c2634437b8",
  measurementId: "G-3TSC6CZ51X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
