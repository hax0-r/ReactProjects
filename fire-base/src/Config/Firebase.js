// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkAEUi_hSQz1AtbMd9ltFPHaW0AxOGvKo",
  authDomain: "vite-contact-ceefd.firebaseapp.com",
  projectId: "vite-contact-ceefd",
  storageBucket: "vite-contact-ceefd.appspot.com",
  messagingSenderId: "202748737745",
  appId: "1:202748737745:web:fb295a7d96a7f5a401adf0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)