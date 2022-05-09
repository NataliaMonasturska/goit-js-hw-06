const DivBoxes = document.querySelector("div#boxes");
const BtnCreate = document.querySelector('button[data-create]');
const BtnDestroy = document.querySelector('button[data-destroy]');
const Input = document.querySelector('input[type="number"]');


const TopicalValue = () => Number(Input.value);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes() {
  let SizeDiv = 20;
  const DivsEl = [];
  let amount = TopicalValue();
  for (let i = 0; i < amount; i++){
     SizeDiv += 10;
    const DivEl = document.createElement('div');
    DivEl.style.width = `${SizeDiv}px`;
    DivEl.style.height = `${SizeDiv}px`;
    DivEl.style.backgroundColor = getRandomHexColor()
    DivEl.style.border = `1px solid #000`
    DivEl.style.margin = `5px`
    DivEl.style.borderRadius = `5px`
    DivsEl.push(DivEl);
  }
  DivBoxes.append(...DivsEl);
}


function removeBoxes() {
  DivBoxes.innerHTML = "";
}

BtnCreate.addEventListener('click', createBoxes);
BtnDestroy.addEventListener('click',removeBoxes);







