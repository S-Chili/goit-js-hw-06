const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);

const itemsArray = [...numberOfCategories]
  .map(
    (items) => `Category: ${items.children[0].textContent}
Elements: ${items.children[1].children.length}`
  )
  .join("\n");
console.log(itemsArray);
