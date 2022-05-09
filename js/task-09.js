const Button = document.querySelector("button.change-color")
const Body = document.querySelector("body")
const SpanColor = Body.querySelector("span.color")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const MakeBodyColor = (event) => {
  Body.style.backgroundColor = getRandomHexColor();
  SpanColor.textContent = Body.style.backgroundColor;
}
Button.addEventListener("click", MakeBodyColor)
  











