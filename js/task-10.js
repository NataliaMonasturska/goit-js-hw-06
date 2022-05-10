const divBoxes = document.querySelector("div#boxes");
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const input = document.querySelector('input[type="number"]');



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let sizeDiv = 20;
  const divsEl = [];
  for (let i = 0; i < amount; i++){
     sizeDiv += 10;
    const divEl = document.createElement('div');
    divEl.style.width = `${sizeDiv}px`;
    divEl.style.height = `${sizeDiv}px`;
    divEl.style.backgroundColor = getRandomHexColor()
    divEl.style.border = `1px solid #000`
    divEl.style.margin = `5px`
    divEl.style.borderRadius = `5px`
    divsEl.push(divEl);
  }
  divBoxes.append(...divsEl);
}

function callback() {
  createBoxes(Number(input.value));
}


function removeBoxes() {
  divBoxes.innerHTML = "";
}

btnCreate.addEventListener('click', callback);
btnDestroy.addEventListener('click',removeBoxes);







