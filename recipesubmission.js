const recipeForm = document.getElementById('recipeForm');
const recipeList = document.getElementById('recipeList');

recipeForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('recipeTitle').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;
const prep = document.getElementById('prep').value;
const coo = document.getElementById('coo').value;

    const recipe = {
        title,
        ingredients,
        instructions,
	prep,
	coo
    };

    // You can save this recipe to a database or an array for display.

    displayRecipe(recipe);

    // Clear form fields
    recipeForm.reset();
});

function displayRecipe(recipe) {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');
    recipeCard.innerHTML = `
        <h2>${recipe.title}</h2>
        <h3>Ingredients:</h3>
        <p>${recipe.ingredients}</p>
        <h3>Instructions:</h3>
        <p>${recipe.instructions}</p>
        <h3>Preparation Time:</h3>
        <p>${recipe.prep}</p>
        <h3>Cooking Time:</h3>
        <p>${recipe.coo}</p>
    `;
    recipeList.appendChild(recipeCard);
}
