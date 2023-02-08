const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.getElementById("ingredients");

const listItemEls = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");

listEl.innerHTML = listItemEls;
