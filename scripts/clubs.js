document.addEventListener("DOMContentLoaded", function () {
  const seasonSelect = document.getElementById("seasonSelect");
  const clubsContainer = document.getElementById("clubsContainer");
  const playerSearch = document.getElementById("playerSearch");
  const suggestionsList = document.getElementById("suggestionsList");

  let allPlayers = [];

  // Récupère les joueurs de toutes les saisons
  function updateAllPlayers() {
    allPlayers = [];

    for (const saison in clubsData) {
      const clubs = clubsData[saison];
      clubs.forEach(club => {
        club.joueurs.forEach(joueur => {
          const exists = allPlayers.some(j => j.id === joueur.id);
          if (!exists) {
            allPlayers.push({
              nomComplet: `${joueur.prenom} ${joueur.nom}`,
              id: joueur.id
            });
          }
        });
      });
    }
  }

  // Affiche les suggestions correspondant à la requête
  function showSuggestions(query) {
    const input = query.toLowerCase().trim();
    suggestionsList.innerHTML = "";

    if (input.length === 0) return;

    // Recherche si prénom ou nom contient la chaîne entrée (pas juste startsWith)
    const filtered = allPlayers.filter(joueur => 
      joueur.nomComplet.toLowerCase().includes(input)
    );

    filtered.slice(0, 10).forEach(joueur => {
      const li = document.createElement("li");
      li.textContent = joueur.nomComplet;
      li.style.cursor = "pointer";
      li.addEventListener("click", () => {
        window.location.href = `joueur.html?id=${joueur.id}`;
      });
      suggestionsList.appendChild(li);
    });
  }

  // Affiche les clubs pour une saison donnée
  function displayClubs(season) {
    clubsContainer.innerHTML = "";

    const clubs = clubsData[season];
    if (!clubs) return;

    clubs.forEach(club => {
      const clubDiv = document.createElement("div");
      clubDiv.className = "club";

      clubDiv.innerHTML = `
        <h2><img src="../images/logo/${club.logo}" alt="${club.nom}" class="club-logo"> ${club.nom}</h2>
        <div class="joueurs-scroll">
          ${club.joueurs.map(joueur => `
            <div class="joueur-card" data-id="${joueur.id}">
              <div class="joueur-image-wrapper">
                <img src="../images/joueurs/${joueur.photo}" alt="${joueur.nom}" class="photo-default">
                <img src="../images/joueurs/${joueur.photoMatch}" alt="${joueur.nom}" class="photo-hover">
              </div>
              <p>${joueur.prenom} <strong>${joueur.nom}</strong></p>
              <div class="poste-infos">
                <span class="poste">#${joueur.numero} - ${joueur.poste}</span>
              </div>
            </div>
          `).join("")}
        </div>
      `;

      clubsContainer.appendChild(clubDiv);
    });
  }

  // Event listener pour changer la saison affichée
  seasonSelect.addEventListener("change", () => {
    displayClubs(seasonSelect.value);
  });

  // Redirection sur clic d'une carte joueur dans la liste des clubs
  clubsContainer.addEventListener("click", function (e) {
    const card = e.target.closest(".joueur-card");
    if (card) {
      const joueurId = card.dataset.id;
      window.location.href = `joueur.html?id=${joueurId}`;
    }
  });

  // Recherche dynamique au fil de la frappe
  playerSearch.addEventListener("input", () => {
    showSuggestions(playerSearch.value);
  });

  // Ferme les suggestions si clic en dehors
  document.addEventListener("click", (e) => {
    if (!suggestionsList.contains(e.target) && e.target !== playerSearch) {
      suggestionsList.innerHTML = "";
    }
  });

  // Initialisation au chargement
  updateAllPlayers();
  displayClubs(seasonSelect.value);
});