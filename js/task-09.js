const body = document.body;
const colorSpan = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');

changeColor.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  body.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
