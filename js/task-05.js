const input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');
// output.textContent = "Anonymous";

input.addEventListener("input", (event) => {
    if (event.currentTarget.value === "") {
        output.textContent = "Anonymous"
    }
    else {
          output.textContent = event.currentTarget.value;
     }
});