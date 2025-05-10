import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const signupForm = document.getElementById("signup-form");

document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();;

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Compte créé avec succès !");
      window.location.href = "../index.html"; // Redirection après inscription
    })
    .catch((error) => {
      alert("Erreur : " + error.message);
    });
});