// scripts/login.js
import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDUYXwvQGNvG7FF1hmEY8T-nvtpnXCaWkI",
  authDomain: "instant-n1.firebaseapp.com",
  projectId: "instant-n1",
  storageBucket: "instant-n1.appspot.com",
  messagingSenderId: "536848004939",
  appId: "1:536848004939:web:313de5f5478ee1870bdace",
  measurementId: "G-4YKGJN1W46"
};

// Init Firebase si pas déjà fait
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

// Connexion
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  if (!loginForm) return;

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Connecté :", userCredential.user);
        window.location.href = "/National1/index.html"; // Adapte si besoin
      })
      .catch((error) => {
        console.error("Erreur de connexion :", error.message);
        alert("Erreur : " + error.message);
      });
  });
});