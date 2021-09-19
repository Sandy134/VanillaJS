const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container');

let searchQuery = "";

const App_ID = '5d292a80';

const App_Key = 'cf9358d61d67a27dae0869eb6802c2df';

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    console.log(searchQuery);
    fetchApi();
});



async function fetchApi() {
    const baseURL = `https://api.edamam.com/api/recipes/v2?q=pizza&app_id=${App_ID}&app_key=${App_Key}&to=20&type=public`;

    const response = await fetch(baseURL);
    // console.log(response);
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data);

}

function generateHTML(results) {
    let generatedHTML = ``;
    results.map(result => {
        generatedHTML += `
        <div class="item">
        <img src="${result.recipe.image}"
        alt="">
        <div class="flex-container">
            <h1 class="title">${result.recipe.label}</h1>
            <a class="view-button" href="${result.recipe.url}" target="_blank">View Recipe</a>
        </div>
        <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
        <p class="item-data">Diet Label: ${result.recipe.dietLabels}</p>
        <p class="item-data">Health Label: ${result.recipe.healthLabels}</p>
    </div>
        `
    });

    searchResultDiv.innerHTML = generatedHTML;

}