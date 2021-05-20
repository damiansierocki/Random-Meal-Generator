const mealDiv = document.querySelector(".meal");
const apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

fetch(apiUrl)
    .then((data) => data.json())
    // .then((meal) => generateHtml(meal.meals[0].idMeal));
    .then((meal) => generateHtml(meal));

const generateHtml = (meal) => {
    const idMeal = meal.meals[0].idMeal;

    const html = `
        <div class="id">Meal id: ${idMeal}</div>
    `;

    mealDiv.innerHTML = html;
};
