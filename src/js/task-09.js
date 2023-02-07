// Напиши скрипт, який змінює кольори фону елемента < body >
//   через інлайн - стиль по кліку на button.change - color
//    і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const buttonChangeColor = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");
const bodyBackground = document.body;
bodyBackground.setAttribute("style", "background-color:#FFFAFA");

const changeColor = () => {
  const hexColor = getRandomHexColor();
  bodyBackground.style.backgroundColor = hexColor;
  colorValue.innerHTML = hexColor;
};
buttonChangeColor.addEventListener("click", changeColor);

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
