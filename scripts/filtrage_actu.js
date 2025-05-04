document.addEventListener("DOMContentLoaded", function () {
  const allTags = ["transfert", "budget","mercato","achat","vente","argent","boulogne"]
  const searchInput = document.getElementById("searchInput");
  const selectedTagsContainer = document.getElementById("selectedTags");
  const resetAllBtn = document.getElementById("resetAll");
  const articles = document.querySelectorAll(".article-card");
  const allTags = new Set();

  // Récupère tous les tags de chaque article
  articles.forEach(article => {
    article.dataset.tags.split(",").forEach(tag => {
      allTags.add(tag.trim().toLowerCase());
    });
  });

  // Met à jour l'affichage des articles selon les tags sélectionnés
  function updateDisplayedArticles() {
    const selectedTags = Array.from(selectedTagsContainer.querySelectorAll(".tag")).map(tag => tag.textContent.trim().toLowerCase());

    articles.forEach(article => {
      const articleTags = article.dataset.tags.toLowerCase();
      const shouldShow = selectedTags.length === 0 || selectedTags.some(tag => articleTags.includes(tag));
      article.style.display = shouldShow ? "block" : "none";
    });
  }

  // Ajoute un tag sélectionné
  function addTag(tagText) {
    const tagLower = tagText.toLowerCase();
    if ([...selectedTagsContainer.children].some(el => el.textContent.trim().toLowerCase() === tagLower)) return;

    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = tagText;

    const removeBtn = document.createElement("span");
    removeBtn.textContent = "✖";
    removeBtn.className = "remove";
    removeBtn.onclick = () => {
      tag.remove();
      updateDisplayedArticles();
    };

    tag.appendChild(removeBtn);
    selectedTagsContainer.appendChild(tag);

    updateDisplayedArticles();
  }

  // Gère l'entrée utilisateur
searchInput.addEventListener("input", function () {
  const val = this.value.toLowerCase();
  const suggestionsDiv = document.getElementById("suggestions");
  suggestionsDiv.innerHTML = "";

  if (val.length >= 2) {
    const matchingTags = [...allTags].filter(tag => tag.startsWith(val));

    matchingTags.forEach(tag => {
      const suggestion = document.createElement("div");
      suggestion.textContent = tag;
      suggestion.onclick = () => {
        addTag(tag);
        this.value = "";
        suggestionsDiv.innerHTML = "";
      };
      suggestionsDiv.appendChild(suggestion);
    });
  }
});

  // Réinitialise tout
  resetAllBtn.addEventListener("click", function () {
    selectedTagsContainer.innerHTML = "";
    updateDisplayedArticles();
  });

  updateDisplayedArticles();
});

 // Ferme les suggestions
document.addEventListener("click", function (e) {
  if (!searchInput.contains(e.target)) {
    document.getElementById("suggestions").innerHTML = "";
  }
});