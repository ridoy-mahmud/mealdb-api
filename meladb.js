const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals));
}
// }
function displaySearchResult(meals) {
    const searchResult = document.getElementById('search-result');
    // To remove to previous Result
    searchResult.textContent = '';
    for (const meal of meals) {
        console.log(meal);
        const div = document.createElement("div");
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h3 class="card-title">${meal.strMeal}</h3>
            <p class="card-title"><b style="color: rgb(255,193,7);">Food Category:</b> ${meal.strCategory}</p>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        </div>
    </div>`;
        searchResult.appendChild(div);
    }
}
function loadmealDetais(mealId) {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data));
}
function displayMealDetails(meal) {
    const mealDetails = document.getElementById('meal-details');
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
    `
    mealDetails.appendChild(div);
}