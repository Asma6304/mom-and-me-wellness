// auth.js

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const auth = getAuth();

// Signup Function (you already used it once, now you focus on login)
export function signup(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Signup successful!");
    })
    .catch((error) => {
      alert("Signup error: " + error.message);
    });
}

// Login Function
export function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login successful!");
      // Redirect after alert is closed
      setTimeout(() => {
        window.location.href = "index.html";
      }, 100); // slight delay so alert shows
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
}
