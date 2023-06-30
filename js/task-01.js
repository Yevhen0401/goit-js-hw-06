const list = document.querySelector('#categories');

const numberOfCategories = list.children.length;
console.log("Number of categories :", numberOfCategories);

[...list.children].forEach(item => {
  const categoryTitle = item.firstElementChild.textContent;
  const elementsList = item.lastElementChild;
  const numberOfElements = elementsList.children.length;

  console.log('Category:', categoryTitle);
  console.log('Elements:', numberOfElements);
});
