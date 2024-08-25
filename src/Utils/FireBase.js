// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY9qusIluMWtDyGjeAPjnmC9o-xZpSXB4",
  authDomain: "netflixgpt-32ebc.firebaseapp.com",
  projectId: "netflixgpt-32ebc",
  storageBucket: "netflixgpt-32ebc.appspot.com",
  messagingSenderId: "561533892034",
  appId: "1:561533892034:web:0becd29d65c2aaae2f925b",
  measurementId: "G-EHTWZJJD6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();