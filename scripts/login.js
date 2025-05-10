import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";

document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Connexion réussie :", userCredential.user);
      window.location.href = "mon-espace.html";
    })
    .catch((error) => {
      alert("Erreur de connexion : " + error.message);
    });
});