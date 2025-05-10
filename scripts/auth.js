<script type="module">
  import { auth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";
  import { app } from "../scripts/firebase-config.js";

  const loginBtn = document.getElementById("login-btn");
  const profileMenu = document.getElementById("profile-menu");

  const authInstance = auth;

  onAuthStateChanged(authInstance, (user) => {
    if (user) {
      // Utilisateur connecté
      loginBtn.style.display = "none";
      profileMenu.classList.remove("hidden");
    } else {
      // Utilisateur déconnecté
      loginBtn.style.display = "inline-block";
      profileMenu.classList.add("hidden");
    }
  });

  const logoutLink = document.getElementById("logout");
  if (logoutLink) {
    logoutLink.addEventListener("click", (e) => {
      e.preventDefault();
      signOut(authInstance)
        .then(() => {
          location.reload(); // Recharge pour mettre à jour l'affichage
        })
        .catch((error) => {
          console.error("Erreur de déconnexion :", error.message);
        });
    });
  }
</script>