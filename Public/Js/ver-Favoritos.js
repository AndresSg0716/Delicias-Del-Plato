document.addEventListener("DOMContentLoaded", function () {
  const favoriteButtons = document.querySelectorAll(".favorite-btn");
  const favoritesList = document.getElementById("favorites-list");
  const clearFavoritesButton = document.getElementById("clear-favorites");

  // Cargar favoritos al cargar la página
  loadFavorites();

  favoriteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const itemName = this.getAttribute("data-item");
      saveFavorite(itemName);
      loadFavorites(); // Actualiza la lista de favoritos después de agregar
    });
  });

  clearFavoritesButton.addEventListener("click", clearFavorites);

  function saveFavorite(item) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.includes(item)) {
      favorites.push(item);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert(`${item} ha sido guardado como favorito.`);
    } else {
      alert(`${item} ya está en favoritos.`);
    }
  }

  function loadFavorites() {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favoritesList.innerHTML = ""; // Limpiar la lista antes de cargar
    if (favorites.length > 0) {
      favorites.forEach((favorite) => {
        let li = document.createElement("li");
        li.textContent = favorite;
        favoritesList.appendChild(li);
      });
    } else {
      favoritesList.innerHTML = "<li>No tienes favoritos guardados.</li>";
    }
  }

  function clearFavorites() {
    localStorage.removeItem("favorites");
    alert("Favoritos eliminados.");
    loadFavorites(); // Recargar la lista después de limpiar
  }
});
