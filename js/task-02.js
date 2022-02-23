const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(element => {
  const item = document.createElement("li");
  item.textContent = element;
  item.classList.add("item");
  document.querySelector("#ingredients").prepend(item);
});