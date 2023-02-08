const subEl = document.querySelector('[data-action="decrement"]');
const addEl = document.querySelector('[data-action="increment"]');
const mainValueEl = document.getElementById("value");

let counterValue = 0;
const decrement = () => {
  counterValue -= 1;
  mainValueEl.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  mainValueEl.textContent = counterValue;
};

addEl.addEventListener("click", increment);
subEl.addEventListener("click", decrement);
