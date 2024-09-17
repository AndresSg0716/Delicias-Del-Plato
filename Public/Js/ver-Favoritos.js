document.addEventListener('DOMContentLoaded', function () {
  const favoriteButtons = document.querySelectorAll('.favorite-btn');
  const favoritesList = document.getElementById('favorites-list');
  const clearFavoritesButton = document.getElementById('clear-favorites');
  const addedFavorites = new Set(); 

  
  favoriteButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const menuItem = this.closest('.menu-item');
      const itemName = menuItem.querySelector('h2').textContent;

      if (!addedFavorites.has(itemName)) {
        const itemPrice = menuItem.querySelector('p').textContent;
        const itemAdditions = menuItem.querySelector('ul').cloneNode(true);

        const favoriteItem = document.createElement('li');
        const favoriteTitle = document.createElement('h3');
        const favoritePrice = document.createElement('p');
        const removeButton = document.createElement('button');

        favoriteTitle.textContent = itemName;
        favoritePrice.textContent = itemPrice;
        removeButton.textContent = 'Eliminar';
        removeButton.className = 'remove-favorite';

        
        favoriteItem.appendChild(favoriteTitle);
        favoriteItem.appendChild(favoritePrice);
        favoriteItem.appendChild(itemAdditions);
        favoriteItem.appendChild(removeButton);

        
        favoritesList.appendChild(favoriteItem);
        addedFavorites.add(itemName); 
      }
    });
  });

  
  clearFavoritesButton.addEventListener('click', function () {
    favoritesList.innerHTML = ''; 
    addedFavorites.clear(); 
  });

  
  favoritesList.addEventListener('click', function (e) {
    if (e.target.classList.contains('remove-favorite')) {
      const item = e.target.closest('li');
      const itemName = item.querySelector('h3').textContent;
      item.remove();
      addedFavorites.delete(itemName); 
    }
  });
});
favoriteButtons.forEach((button) => {
  button.addEventListener('click', function () {
    const menuItem = this.closest('.menu-item');
    const itemName = menuItem.querySelector('h2').textContent;

    if (!addedFavorites.has(itemName)) {
      const itemPrice = menuItem.querySelector('p').textContent;
      const itemAdditions = menuItem.querySelector('ul').cloneNode(true);

      const favoriteItem = document.createElement('li');
      const favoriteTitle = document.createElement('h3');
      const favoritePrice = document.createElement('p');
      const removeButton = document.createElement('button');

      favoriteTitle.textContent = itemName;
      favoritePrice.textContent = itemPrice;
      removeButton.textContent = 'Eliminar';
      removeButton.className = 'remove-favorite'; 

      
      favoriteItem.appendChild(favoriteTitle);
      favoriteItem.appendChild(favoritePrice);
      favoriteItem.appendChild(itemAdditions);
      favoriteItem.appendChild(removeButton);

      // Se añade el ítem al listado de favoritos
      favoritesList.appendChild(favoriteItem);
      addedFavorites.add(itemName); 
    }
  });
});


favoritesList.addEventListener('click', function (e) {
  if (e.target.classList.contains('remove-favorite')) {
    const item = e.target.closest('li');
    const itemName = item.querySelector('h3').textContent;
    item.remove();
    addedFavorites.delete(itemName); 
  }
});