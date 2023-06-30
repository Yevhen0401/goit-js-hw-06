const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 
const createUl = document.querySelector("#ingredients");
console.log(createUl);

ingredients.forEach(ingredient => {
  const createLink = document.createElement("li");
  console.log(createLink);
  createLink.textContent = ingredient;
  createLink.classList.add("item");
  createUl.appendChild(createLink);
});

 
 
 
 
 
