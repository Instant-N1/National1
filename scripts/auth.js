// scripts/auth.js
import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";
import { auth } from "./firebase-config.js";

const firebaseConfig = {
  apiKey: "AIzaSyDUYXwvQGNvG7FF1hmEY8T-nvtpnXCaWkI",
  authDomain: "instant-n1.firebaseapp.com",
  projectId: "instant-n1",
  storageBucket: "instant-n1.appspot.com",
  messagingSenderId: "536848004939",
  appId: "1:536848004939:web:313de5f5478ee1870bdace",
  measurementId: "G-4YKGJN1W46"
};

// ✅ Évite l'erreur de double initialisation
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);


// Détecte l'état de connexion
onAuthStateChanged(auth, (user) => {
  const loginBtn = document.getElementById("login-btn");
  const profileMenu = document.getElementById("profile-menu");

  if (user) {
    // Si connecté : cacher "Connexion", afficher "Mon profil"
    if (loginBtn) loginBtn.style.display = "none";
    if (profileMenu) profileMenu.style.display = "inline-block";
  } else {
    // Sinon : afficher "Connexion", cacher "Mon profil"
    if (loginBtn) loginBtn.style.display = "inline-block";
    if (profileMenu) profileMenu.style.display = "none";
  }
});

// Gérer le menu déroulant
const profileBtn = document.getElementById("profile-btn");
const dropdown = document.getElementById("profile-dropdown");

if (profileBtn) {
  profileBtn.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  });
}

// Déconnexion
const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    signOut(auth)
      .then(() => {
        window.location.href = "index.html";
      })
      .catch((error) => {
        console.error("Erreur de déconnexion :", error);
      });
  });
}