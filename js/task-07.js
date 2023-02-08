// Напиши скрипт, який реагує на зміну значення input#font - size - control
//     (подія input) і змінює інлайн - стиль span#text, оновлюючи
// властивість font - size.В результаті, перетягуючи повзунок,
//     буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

let controlFontSizeEl = document.getElementById("font-size-control");
let textEl = document.getElementById("text");

controlFontSizeEl.oninput = function () {
  textEl.style.fontSize = controlFontSizeEl.value + "px";
};
