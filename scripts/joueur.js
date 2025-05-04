document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const joueurId = params.get("id");

  if (!joueurId || typeof joueursData === "undefined") return;

  const joueur = joueursData.find(j => j.id === joueurId);
  if (!joueur) {
    document.body.innerHTML = "<p>Ce joueur n'est pas encore disponible 😿</p>";
    return;
  }

  // Affichage des infos de base
  const photoEl = document.getElementById("photo-joueur");
  const nomEl = document.getElementById("nom-joueur");
  if (photoEl) photoEl.src = `../images/joueurs/${joueur.photo}`;
  if (nomEl) nomEl.textContent = `${joueur.prenom} ${joueur.nom}`;

  const listeInfos = document.getElementById("liste-infos");
  if (listeInfos) {
    listeInfos.innerHTML = `
      <li><strong>Âge :</strong> ${joueur.age} ans</li>
      <li><strong>Poste :</strong> ${joueur.poste_general.join(", ")}</li>
      <li><strong>Taille :</strong> ${joueur.taille}</li>
      <li><strong>Pied fort :</strong> ${joueur.pied}</li>
      <li><strong>Contrat :</strong> ${joueur.contrat}</li>
    `;
  }

  // Transferts
  const transfertsList = document.getElementById("liste-transferts");
  if (transfertsList && joueur.transferts) {
    joueur.transferts.forEach(t => {
      const div = document.createElement("div");
      div.className = "transfert-item";
      div.innerHTML = `
        <img src="../images/logo/${t.logo}" alt="${t.club}" class="logo-transfert">
        <div>
          <p><strong>${t.club}</strong></p>
          <p>${t.prix} / ${t.dates}</p>
          <p>${t.matchs} matchs ; ${t.stat}</p>
        </div>
      `;
      transfertsList.appendChild(div);
    });
  }

  // Terrain
const postesContainer = document.getElementById("postes-actifs");
if (postesContainer && joueur.poste) {
  joueur.poste.forEach(p => {
    const img = document.createElement("img");
    img.src = `../images/postes/${p}.png`;
    img.alt = p;
    img.className = "img-poste";
    postesContainer.appendChild(img);
  });
}

  // Vidéo
  const videoIframe = document.getElementById("video-joueur");
  if (videoIframe) {
    if (joueur.video) {
      videoIframe.src = joueur.video;
    } else {
      videoIframe.parentElement.innerHTML = "<p>Aucune vidéo disponible.</p>";
    }
  }

  // Galerie
  const galerie = document.getElementById("galerie-joueur");
  if (galerie && joueur.galerie) {
    joueur.galerie.forEach(img => {
      const wrapper = document.createElement("div");
      wrapper.className = "card-photo";
      const image = document.createElement("img");
      image.src = `../images/joueurs/${img}`;
      wrapper.appendChild(image);
      galerie.appendChild(wrapper);
    });
  }

  // Stats détaillées
  const statsTable = document.getElementById("tableau-stats");
  if (statsTable && joueur.statsDetaillees) {
    const tbody = statsTable.querySelector("tbody");
    joueur.statsDetaillees.forEach(stat => {
      const tr = document.createElement("tr");
      const couleur =
        stat.percentile >= 80 ? "green" :
        stat.percentile <= 20 ? "red" : "navy";
      tr.innerHTML = `
        <td>${stat.nom}</td>
        <td>${stat.valeur}</td>
        <td style="color: ${couleur};">${stat.percentile}e percentile</td>
      `;
      tbody.appendChild(tr);
    });
  }

  // === GRAPHIQUE AVEC LOGOS – Désactivé temporairement ===
  /*
  if (joueur.notes && Array.isArray(joueur.notes)) {
    const labels = joueur.notes.map((_, i) => `J${i + 1}`);
    const notes = joueur.notes.map(n => n.note === "NJ" ? null : n.note);
    const logos = joueur.notes.map(n => n.adversaire);

    const images = logos.map(src => {
      const img = new Image();
      img.src = `../images/logo/${src}`;
      return img;
    });

    const ctx = document.getElementById("graphique-notes").getContext("2d");

    const logoPlugin = {
      id: 'logoPlugin',
      afterDraw: chart => {
        const {ctx, chartArea: {bottom}, scales: {x}} = chart;
        images.forEach((img, i) => {
          const xPos = x.getPixelForValue(i);
          if (!isNaN(xPos)) {
            ctx.drawImage(img, xPos - 12, bottom + 10, 24, 24);
          }
        });
      }
    };

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: "Note Sofascore",
          data: notes,
          borderColor: 'blue',
          backgroundColor: 'rgba(0, 123, 255, 0.1)',
          pointBackgroundColor: 'blue',
          tension: 0.3,
          spanGaps: false,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: true, position: 'top' },
          tooltip: { mode: 'index', intersect: false },
          zoom: {
            limits: { x: { minRange: 6 } },
            pan: {
              enabled: true,
              mode: 'x',
              modifierKey: 'ctrl'
            },
            zoom: {
              wheel: { enabled: true },
              pinch: { enabled: true },
              mode: 'x'
            }
          }
        },
        scales: {
          x: {
            ticks: { callback: (val, index) => labels[index] },
            min: 0,
            max: 5  // 6 matchs visibles
          },
          y: {
            min: 5,
            max: 10,
            ticks: { stepSize: 0.5 }
          }
        }
      },
      plugins: [logoPlugin]
    });
  }
  */

  // === Temps de jeu ===
const tableauTempsJeu = document.getElementById("tableau-temps-jeu").querySelector("tbody");
const selectSaison = document.getElementById("select-saison");

if (joueur.tempsJeu && typeof joueur.tempsJeu === "object") {
  const saisons = Object.keys(joueur.tempsJeu);

  // Remplir le sélecteur de saison
  saisons.forEach(saison => {
    const option = document.createElement("option");
    option.value = saison;
    option.textContent = saison;
    selectSaison.appendChild(option);
  });

  // Fonction d'affichage du tableau
  function afficherTempsJeu(saison) {
    const data = joueur.tempsJeu[saison];
    tableauTempsJeu.innerHTML = "";

let totalMatchs = 0, totalTitulaires = 0, totalMinutes = 0;
let totalButs = 0, totalPasses = 0; // Ajout pour les nouvelles colonnes

    data.forEach(item => {
      const moyenne = (item.minutes / item.matchs).toFixed(1);
      totalMatchs += item.matchs;
      totalTitulaires += item.titulaires;
      totalMinutes += item.minutes;
      totalButs += item.buts;
      totalPasses += item.passes;

      tableauTempsJeu.innerHTML += `
        <tr>
          <td>${item.competition}</td>
          <td>${item.matchs}</td>
          <td>${item.titulaires}</td>
          <td>${item.minutes}</td>
          <td>${moyenne}</td>
	  <td>${item.buts}</td>
	  <td>${item.passes}</td>
        </tr>
      `;
    });

    const moyenneTotale = (totalMinutes / totalMatchs).toFixed(1);
    tableauTempsJeu.innerHTML += `
      <tr class="total">
        <td><strong>Total</strong></td>
        <td>${totalMatchs}</td>
        <td>${totalTitulaires}</td>
        <td>${totalMinutes}</td>
        <td>${moyenneTotale}</td>
        <td>${totalButs}</td>
        <td>${totalPasses}</td>
      </tr>
    `;
  }

  // Affiche la première saison par défaut
  afficherTempsJeu(saisons[0]);

  // Réagit au changement de sélection
  selectSaison.addEventListener("change", function () {
    afficherTempsJeu(this.value);
  });
}

});