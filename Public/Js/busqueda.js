document.addEventListener("DOMContentLoaded", function () {
    const inputSearch = document.getElementById('buscador');
    const foodDivs = document.querySelectorAll('.food');
    const noResultsDiv = document.getElementById('no-results');

    inputSearch.addEventListener('keyup', function () {
        const searchValue = this.value.toLowerCase();
        let found = false;

        foodDivs.forEach(foodDiv => {
            const foodName = foodDiv.querySelector('h3').textContent.toLowerCase();
            if (foodName.includes(searchValue)) {
                foodDiv.style.display = 'block';
                found = true;
            } else {
                foodDiv.style.display = 'none';
            }
        });

        if (found) {
            noResultsDiv.style.display = 'none';
        } else {
            noResultsDiv.style.display = 'block';
        }
    });
});
