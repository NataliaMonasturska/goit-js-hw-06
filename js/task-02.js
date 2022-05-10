const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ulIngredients = document.querySelector("ul#ingredients");

  const ingredientsList = ingredients.map((elem) => {
    const makeLi = document.createElement("li");
    makeLi.textContent = elem;
    makeLi.classList.add("item")
    return makeLi;
  }); 
  ulIngredients.append(...ingredientsList);
