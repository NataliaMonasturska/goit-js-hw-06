const Input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');


Input.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value;
});