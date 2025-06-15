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

// LOGIN
function login(email, password) {
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Login successful!");
    })
    .catch((error) => {
      alert("Login error: " + error.message);
    });
}
