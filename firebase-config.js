// firebase-config.js
// Importing not needed for browser version — we use the CDN version

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZIfQccOC6ckGJSZACi-XIb9kWdvLG4Pw",
  authDomain: "mom-and-me-wellness.firebaseapp.com",
  projectId: "mom-and-me-wellness",
  storageBucket: "mom-and-me-wellness.firebasestorage.app",
  messagingSenderId: "9338015501",
  appId: "1:9338015501:web:f4dd4b90a7c3bedcc8aa44",
  measurementId: "G-YP17VGZNT0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Optional: setup global variables for auth and db
const auth = firebase.auth();
const db = firebase.firestore();
