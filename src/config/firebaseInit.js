// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_DB_API_KEY,
  authDomain: "e-commerce-app-299fc.firebaseapp.com",
  projectId: "e-commerce-app-299fc",
  storageBucket: "e-commerce-app-299fc.appspot.com",
  messagingSenderId: "510625543243",
  appId: process.env.REACT_APP_DB_APP_ID,
  measurementId: "G-B078B2RHN1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
