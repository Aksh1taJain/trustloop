// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzRt2FX6oEvksUyNXgTIPSXWYZzQiXFdg",
  authDomain: "trustloop-1c7d0.firebaseapp.com",
  projectId: "trustloop-1c7d0",
  storageBucket: "trustloop-1c7d0.firebasestorage.app",
  messagingSenderId: "825472468042",
  appId: "1:825472468042:web:3b118e42106b0d9118d2b3",
  measurementId: "G-VF52KXT3SS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);