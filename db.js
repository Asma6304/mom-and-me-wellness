// db.js

function saveUserData(name, email, message) {
  db.collection("contacts").add({
    name: name,
    email: email,
    message: message,
    timestamp: new Date()
  })
  .then(() => {
    alert("Data saved successfully!");
  })
  .catch((error) => {
    alert("Error saving data: " + error.message);
  });
}
