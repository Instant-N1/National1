import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDUYXwvQGNvG7FF1hmEY8T-nvtpnXCaWkI",
  authDomain: "instant-n1.firebaseapp.com",
  projectId: "instant-n1",
  storageBucket: "instant-n1.appspot.com",
  messagingSenderId: "536848004939",
  appId: "1:536848004939:web:313de5f5478ee1870bdace",
  measurementId: "G-4YKGJN1W46"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Gestion du formulaire de connexion
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = loginForm["email"].value;
  const password = loginForm["password"].value;

  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log("Connecté :", cred.user);
      // ✅ Rediriger vers la page d’accueil (ou autre)
      window.location.href = "../index.html";
    })
    .catch((err) => {
      console.error("Erreur de connexion :", err.message);
      alert("Erreur : " + err.message); // facultatif
    });
});