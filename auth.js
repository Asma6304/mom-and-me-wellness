// auth.js

// SIGNUP
function signup(email, password) {
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Signup successful!");
    })
    .catch((error) => {
      alert("Signup error: " + error.message);
    });
}

function login(email, password) {
  console.log("Login function called"); // Debug line
  alert("Login attempt starting...");   // Visible check

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Login successful");  // Debug log
      alert("Login successful!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Login failed", error);  // Log actual error
      alert("Login failed: " + error.message);
    });
}
