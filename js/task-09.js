// Напиши скрипт, який змінює кольори фону елемента <body> 
// через інлайн-стиль по кліку на button.change-color 
// і виводить значення кольору в span.color.

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const bodyElement = document.querySelector('body');

changeColorButton.addEventListener('click', function () {
  const randomColor = getRandomHexColor();
  bodyElement.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});