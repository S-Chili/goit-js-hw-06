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

let inputValid = document.getElementById("validation-input");

let totalLenght = inputValid.getAttribute("data-length");
let intTotallenght = parseInt(totalLenght, 10);

inputValid.oninput = function () {
  if (inputValid.value.length === intTotallenght) {
    inputValid.classList.remove("invalid");
    inputValid.classList.add("valid");
  }
  if (inputValid.value.length === 0) {
    inputValid.classList.remove("valid");
    inputValid.classList.remove("invalid");
  }
  if (
    inputValid.value.length !== intTotallenght &&
    inputValid.value.length !== 0
  ) {
    inputValid.classList.add("invalid");
  }
};
