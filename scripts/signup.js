// scripts/signup.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDUYXwvQGNvG7FF1hmEY8T-nvtpnXCaWkI",
  authDomain: "instant-n1.firebaseapp.com",
  projectId: "instant-n1",
  storageBucket: "instant-n1.appspot.com",
  messagingSenderId: "536848004939",
  appId: "1:536848004939:web:313de5f5478ee1870bdace",
};

// Initialisation Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Inscription utilisateur
document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = signupForm["email"].value;
      const password = signupForm["password"].value;

      createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
          console.log("✅ Utilisateur créé :", cred.user);
          window.location.href = "mon-espace.html"; // Redirection après inscription
        })
        .catch((err) => {
          alert("❌ Erreur d'inscription : " + err.message);
        });
    });
  }
});