// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBotHGoGHLrpJ-CN-hjBMHeso075YwpPAo",
  authDomain: "netflix-gpt-123.firebaseapp.com",
  projectId: "netflix-gpt-123",
  storageBucket: "netflix-gpt-123.appspot.com",
  messagingSenderId: "286583111964",
  appId: "1:286583111964:web:500564e1fcdcdeb8287ad9",
  measurementId: "G-X4KC1LZ1DF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
