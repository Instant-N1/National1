// scripts/signup.js
import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";

// Exemple d'inscription
const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = signupForm["email"].value;
  const password = signupForm["password"].value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log("Utilisateur créé :", cred.user);
      window.location.href = "mon-espace.html";
    })
    .catch((err) => {
      console.error("Erreur inscription :", err.message);
    });
});