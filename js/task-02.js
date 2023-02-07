const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.getElementById("ingredients");

const listItem = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");

console.log(listItem);

list.innerHTML = listItem;
