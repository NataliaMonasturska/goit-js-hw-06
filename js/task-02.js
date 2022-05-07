const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const UlIngredients = document.querySelector("ul#ingredients");

  const ingredientsList = ingredients.map((elem) => {
    const MakeLi = document.createElement("li");
    MakeLi.textContent = elem;
    MakeLi.classList.add("item")
    return MakeLi;
  }); 
  UlIngredients.append(...ingredientsList);
