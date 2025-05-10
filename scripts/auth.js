// scripts/auth.js
import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";

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

// ✅ Code pour changer le bouton "Connexion" en "Mon profil"
onAuthStateChanged(auth, (user) => {
  const menu = document.querySelector(".user-menu");
  const connectBtn = document.getElementById("btn-connexion");

  if (user) {
    connectBtn.style.display = "none";
    menu.style.display = "block";
    // Tu peux afficher le pseudo ou l'e-mail ici si tu veux
  } else {
    connectBtn.style.display = "block";
    menu.style.display = "none";
  }
});

// ✅ Déconnexion
document.getElementById("logout-btn")?.addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
});