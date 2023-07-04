const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 

const createUl = document.querySelector("#ingredients");

const liArray = ingredients.map(ingredient => {
  const liItem = document.createElement("li");
  liItem.textContent = ingredient;
  liItem.classList.add("item");
  return liItem;
});

createUl.append(...liArray);


