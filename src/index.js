import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-W0y0LO7KPw6gUJoQBxfoREZjpZv7SuQ",
  authDomain: "proyecto-coderhouse-react-js.firebaseapp.com",
  projectId: "proyecto-coderhouse-react-js",
  storageBucket: "proyecto-coderhouse-react-js.appspot.com",
  messagingSenderId: "565331250756",
  appId: "1:565331250756:web:59c39dcbc02e30b013f611",
  measurementId: "G-8EWBSEQBB2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();