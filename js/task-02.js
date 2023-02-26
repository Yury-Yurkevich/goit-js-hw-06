const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul');
ingredients.forEach(value => {
  const listItem = document.createElement('li');
  listItem.textContent = value;
  listItem.classList.add('item');
  list.append(listItem);
});

const listItem = document.querySelector('#ingredients');
list.append(listItem);
