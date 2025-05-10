auth.onAuthStateChanged(user => {
  if (user) {
    document.getElementById("user-email").textContent = "Connecté en tant que : " + user.email;
  } else {
    window.location.href = "login.html"; // rediriger si pas connecté
  }
});

document.getElementById("logout").addEventListener("click", () => {
  auth.signOut().then(() => {
    window.location.href = "login.html";
  });
});