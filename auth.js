// auth.js
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const auth = getAuth();

// SIGNUP
export function signup(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Signup successful!");
    })
    .catch((error) => {
      alert("Signup error: " + error.message);
    });
}

// LOGIN
export function login(email, password) {
  console.log("Login function called"); // Debug
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Login successful");
      alert("Login successful!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Login failed", error);
      alert("Login failed: " + error.message);
    });
}
