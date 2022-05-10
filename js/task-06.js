const input = document.querySelector("input#validation-input");
const dataInput = document.querySelector('input[data-length="6"]');

const validation = (event) => {
    if (event.currentTarget.value.length < Number(dataInput.dataset.length)) {
      input.classList.add("invalid") 
     
  }
    else {
      input.classList.add("valid") 
  }
    
}
const focusRemove = () => {
input.classList.remove("valid","invalid")
}

 input.addEventListener('blur',validation)
input.addEventListener('focus',focusRemove );





