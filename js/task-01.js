const numberOfCategoriesEls = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategoriesEls.length}`);

const itemsArray = [...numberOfCategoriesEls]
  .map(
    (items) => `Category: ${items.children[0].textContent}
Elements: ${items.children[1].children.length}`
  )
  .join("\n");
console.log(itemsArray);
