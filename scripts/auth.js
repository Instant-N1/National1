// scripts/auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut
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

// Gestion de l'état de connexion
const loginBtn = document.getElementById("login-btn");
const profileMenu = document.getElementById("profile-menu");

if (auth && loginBtn && profileMenu) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      loginBtn.style.display = "none";
      profileMenu.classList.remove("hidden");
    } else {
      loginBtn.style.display = "inline-block";
      profileMenu.classList.add("hidden");
    }
  });

  const logoutLink = document.getElementById("logout");
  if (logoutLink) {
    logoutLink.addEventListener("click", (e) => {
      e.preventDefault();
      signOut(auth)
        .then(() => location.reload())
        .catch((error) => console.error("Erreur de déconnexion :", error));
    });
  }
}