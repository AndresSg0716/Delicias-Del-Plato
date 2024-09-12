document.addEventListener('DOMContentLoaded', function () {
  const favoriteButtons = document.querySelectorAll('.favorite-btn');
  const favoritesList = document.getElementById('favorites-list');
  const clearFavoritesButton = document.getElementById('clear-favorites');

  // Función para agregar el ítem al listado de favoritos
  favoriteButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const menuItem = this.closest('.menu-item');
      const itemName = menuItem.querySelector('h2').textContent;
      const itemPrice = menuItem.querySelector('p').textContent;
      const itemAdditions = menuItem.querySelector('ul').cloneNode(true);

      const favoriteItem = document.createElement('li');
      const favoriteTitle = document.createElement('h3');
      const favoritePrice = document.createElement('p');

      favoriteTitle.textContent = itemName;
      favoritePrice.textContent = itemPrice;

      // Se crea un contenedor para cada ítem guardado en favoritos
      favoriteItem.appendChild(favoriteTitle);
      favoriteItem.appendChild(favoritePrice);
      favoriteItem.appendChild(itemAdditions);

      // Se añade el ítem al listado de favoritos
      favoritesList.appendChild(favoriteItem);
    });
  });

  // Función para limpiar la lista de favoritos
  clearFavoritesButton.addEventListener('click', function () {
    favoritesList.innerHTML = ''; // Elimina todo el contenido de la lista
  });
});