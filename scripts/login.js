import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { sendPasswordResetEmail } from "firebase/auth";

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Connexion réussie !");
      window.location.href = "../index.html"; // Redirection après connexion
    })
    .catch((error) => {
      alert("Erreur : " + error.message);
    });

sendPasswordResetEmail(auth, email)
  .then(() => {
    alert("Un email de réinitialisation a été envoyé !");
  })
  .catch((error) => {
    alert("Erreur : " + error.message);
  });
});