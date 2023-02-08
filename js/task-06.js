// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//     перевіряє його вміст щодо правильної кількості введених символів.

/* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>; */

// Яка кількість символів повинна бути в інпуті, зазначається в його
// атрибуті data - length.
// Якщо введена правильна кількість символів, то border інпуту
// стає зеленим, якщо неправильна кількість - червоним.

// Для додавання стилів використовуй CSS - класи valid і invalid, які ми вже
// додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

let inputValidEl = document.getElementById("validation-input");

let totalLenghtEl = inputValidEl.getAttribute("data-length");
let intTotallenghtEl = parseInt(totalLenghtEl, 10);

inputValidEl.oninput = function () {
  if (inputValidEl.value.length === intTotallenghtEl) {
    inputValidEl.classList.remove("invalid");
    inputValidEl.classList.add("valid");
  }
  if (inputValidEl.value.length === 0) {
    inputValidEl.classList.remove("valid");
    inputValidEl.classList.remove("invalid");
  }
  if (
    inputValidEl.value.length !== intTotallenghtEl &&
    inputValidEl.value.length !== 0
  ) {
    inputValidEl.classList.add("invalid");
  }
};
