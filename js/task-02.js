const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// ingredients.forEach(element => {
//   const item = document.createElement("li");
//   item.textContent = element;
//   item.classList.add("item");
//   document.querySelector("#ingredients").prepend(item);
// });

//---------------------------------------------------------

// const item = ingredients.map(element => `<li class="item">${element}</li>`).join(" ");
// document.querySelector("#ingredients").insertAdjacentHTML("beforeend", item);

//---------------------------------------------------------


const item = ingredients.map(element => document.createElement("li")).join(" ");

document.querySelector("#ingredients").prepend(item);

document.querySelector("#ingredients").insertAdjacentHTML("beforeend", item);


