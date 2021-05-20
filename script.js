const mealDiv = document.querySelector(".meal");
const getMeal = document.querySelector(".getMeal");
const apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

function generateMeal() {
    fetch(apiUrl)
        .then((data) => data.json())
        .then((meal) => generateHtml(meal));

    const generateHtml = (meal) => {
        const mealThumb = meal.meals[0].strMealThumb;
        const mealCategory = meal.meals[0].strCategory;
        const mealArea = meal.meals[0].strArea;

        const mealIngredient1 = meal.meals[0].strIngredient1;
        const mealIngredient2 = meal.meals[0].strIngredient2;
        const mealIngredient3 = meal.meals[0].strIngredient3;
        const mealIngredient4 = meal.meals[0].strIngredient4;
        const mealIngredient5 = meal.meals[0].strIngredient5;
        const mealIngredient6 = meal.meals[0].strIngredient6;
        const mealIngredient7 = meal.meals[0].strIngredient7;
        const mealIngredient8 = meal.meals[0].strIngredient8;
        const mealIngredient9 = meal.meals[0].strIngredient9;
        const mealIngredient10 = meal.meals[0].strIngredient10;
        const mealIngredient11 = meal.meals[0].strIngredient11;
        const mealIngredient12 = meal.meals[0].strIngredient12;
        const mealIngredient13 = meal.meals[0].strIngredient13;
        const mealIngredient14 = meal.meals[0].strIngredient14;
        const mealIngredient15 = meal.meals[0].strIngredient15;
        const mealIngredient16 = meal.meals[0].strIngredient16;
        const mealIngredient17 = meal.meals[0].strIngredient17;
        const mealIngredient18 = meal.meals[0].strIngredient18;
        const mealIngredient19 = meal.meals[0].strIngredient19;
        const mealIngredient20 = meal.meals[0].strIngredient20;

        const ingredientsArr = [
            mealIngredient1,
            mealIngredient2,
            mealIngredient3,
            mealIngredient4,
            mealIngredient5,
            mealIngredient6,
            mealIngredient7,
            mealIngredient8,
            mealIngredient9,
            mealIngredient10,
            mealIngredient11,
            mealIngredient12,
            mealIngredient13,
            mealIngredient14,
            mealIngredient15,
            mealIngredient16,
            mealIngredient17,
            mealIngredient18,
            mealIngredient19,
            mealIngredient20,
        ];

        const ingredientsArrNoNull = [];

        ingredientsArr.forEach((el) => {
            if (el == "" || el == null) {
                return false;
            } else {
                const lastIndexOfEl = ingredientsArr.lastIndexOf(el);

                ingredientsArr.slice(lastIndexOfEl);

                ingredientsArrNoNull.push(el);
            }
        });

        const mealName = meal.meals[0].strMeal;
        const mealInstruction = meal.meals[0].strInstructions;

        let mealVideo = meal.meals[0].strYoutube;
        mealVideo = mealVideo.replace("watch?v=", "embed/");

        const html = `
            <section class="image">
                <img class="mealThumb" src=${mealThumb}>
                <p class="mealCategory"><strong>Category:</strong> ${mealCategory}</p>
                <p class="mealArea"><strong>Area:</strong> ${mealArea}</p>
            </section>

            <section class="ingredients">
                <h2 class="ingredientsTitle">Ingredients:</h2>
                <ul class="ingredientsUl">
                </ul>
            </section>

            <section class="instructions">
                <h2 class="mealName">${mealName}</h2>
                <p class="mealInstructions">${mealInstruction}</p>
            </section>

            <section class="video">
                <h2 class="videoTitle">Video Recipe</h2>
                <iframe class="mealVideo" src=${mealVideo}></iframe>
            </section>

        `;

        mealDiv.innerHTML = html;

        const ingredientsUl = document.querySelector(".ingredientsUl");

        for (let i = 0; i < ingredientsArrNoNull.length; i++) {
            let li = document.createElement("li");
            li.setAttribute("class", "ingredientsLi");
            ingredientsUl.appendChild(li);

            li.innerHTML = li.innerHTML + ingredientsArrNoNull[i];
        }
    };
}

getMeal.addEventListener("click", () => generateMeal());
