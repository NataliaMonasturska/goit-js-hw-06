const button = document.querySelector("button.change-color")
const body = document.querySelector("body")
const spanColor = body.querySelector("span.color")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const makeBodyColor = (event) => {
  body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = body.style.backgroundColor;
}
button.addEventListener("click", makeBodyColor)
  











