// scripts/auth.js
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";
import { auth } from "./firebase-config.js";

// Détecte l'état de connexion
onAuthStateChanged(auth, (user) => {
  const loginBtn = document.getElementById("login-btn");
  const profileMenu = document.getElementById("profile-menu");

  if (user) {
    if (loginBtn) loginBtn.style.display = "none";
    if (profileMenu) profileMenu.style.display = "inline-block";
  } else {
    if (loginBtn) loginBtn.style.display = "inline-block";
    if (profileMenu) profileMenu.style.display = "none";
  }
});

// Gestion du menu déroulant
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