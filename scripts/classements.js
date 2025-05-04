document.addEventListener("DOMContentLoaded", function () {
  const selectSaison = document.getElementById("select-saison");
  const selectJournee = document.getElementById("select-journee");
  const tableau = document.getElementById("tableau-classement").querySelector("tbody");

  // Sécurité : vérifier que tous les éléments existent
  if (!selectSaison || !selectJournee || !tableau) {
    console.error("Un ou plusieurs éléments sont introuvables dans le DOM.");
    return;
  }

  function chargerClassement() {
    const saison = window[selectSaison.value];
    const journeeNum = parseInt(selectJournee.value);
    const journee = saison.journees.find(j => j.numero === journeeNum);

    // Vider tableau
    tableau.innerHTML = "";

    // Afficher les lignes
    journee.classement.forEach((club, index) => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${club.club}</td>
        <td>${club.pts}</td>
        <td>${club.j}</td>
        <td>${club.v}</td>
        <td>${club.n}</td>
        <td>${club.d}</td>
        <td>${club.bp}</td>
        <td>${club.bc}</td>
      `;

      tableau.appendChild(tr);
    });
  }

  // Charger automatiquement au départ
  selectJournee.addEventListener("change", chargerClassement);
  selectSaison.addEventListener("change", chargerClassement);
  chargerClassement(); // initial
});