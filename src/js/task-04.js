const sub = document.querySelector('[data-action="decrement"]');
const add = document.querySelector('[data-action="increment"]');
const mainValue = document.getElementById("value");

let counterValue = 0;
const decrement = () => {
  counterValue -= 1;
  mainValue.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  mainValue.textContent = counterValue;
};

add.addEventListener("click", increment);
sub.addEventListener("click", decrement);
