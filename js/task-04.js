const value = document.querySelector("#value")
const btnMinus = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('button[data-action="increment"]');
let counterValue = 0;
// Value.value = counterValue;
btnMinus.addEventListener("click", () => {
    counterValue -= 1;
    value.textContent = String(counterValue);
    console.log(counterValue);
    
});
btnPlus.addEventListener("click", () => {
    counterValue += 1;
     value.textContent = String(counterValue);
  console.log(counterValue);
});


// console.log(Value);
// console.log(btnMinus);
// console.log(btnPlus);