const Input = document.querySelector("input#validation-input");
const DataInput = document.querySelector('input[data-length="6"]');

console.log(Input);
const validation = (event) => {
    if (event.currentTarget.value.length < Number(DataInput.dataset.length)) {
      Input.classList.add("invalid") 
    }
    Input.classList.add("valid") 
}
const focusRemove = () => {
Input.classList.remove("valid","invalid")
}

 Input.addEventListener('blur',validation)
Input.addEventListener('focus',focusRemove );





