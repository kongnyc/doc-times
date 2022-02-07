// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAffl8cM_C-KelpcoVBdSjd20ipweE3684",
  authDomain: "docstimes-8c894.firebaseapp.com",
  projectId: "docstimes-8c894",
  storageBucket: "docstimes-8c894.appspot.com",
  messagingSenderId: "411421172154",
  appId: "1:411421172154:web:525094c1f3502c99c77d83",
  measurementId: "G-5KTKW90VQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

//https://docstimes-8c894.firebaseio.com
const auth = getAuth();
auth.languageCode = 'it';