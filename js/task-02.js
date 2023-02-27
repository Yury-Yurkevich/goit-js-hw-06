const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elems = ingredients.map(ingr => {
  const itemList = document.createElement("li");
  itemList.classList.add("item");
  itemList.textContent = ingr;
  // console.log(itemEl);
  return itemList;
});

const ulElem = document.querySelector('#ingredients');
ulElem.append(...elems);