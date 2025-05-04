document.addEventListener("DOMContentLoaded", function () {
  const seasonSelect = document.getElementById("seasonSelect");
  const clubsContainer = document.getElementById("clubsContainer");

  function displayClubs(season) {
    clubsContainer.innerHTML = ""; // Clear old content

    const clubs = clubsData[season];
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

  seasonSelect.addEventListener("change", () => {
    displayClubs(seasonSelect.value);
  });

  // Click sur une carte joueur
  clubsContainer.addEventListener("click", function (e) {
    const card = e.target.closest(".joueur-card");
    if (card) {
      const joueurId = card.dataset.id;
      window.location.href = `joueur.html?id=${joueurId}`;
    }
  });

  // Affiche la saison sélectionnée au chargement
  displayClubs(seasonSelect.value);
});