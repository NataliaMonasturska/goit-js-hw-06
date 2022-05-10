const form = document.querySelector("form.login-form");

const validationForm = (event) => {
    event.preventDefault();
    const email = event.currentTarget.elements.email;
    const password = event.currentTarget.elements.password;

    if (email.value === ""||password.value === "") {
        alert("Все поля должны быть заполнены!")
       
    }
    else{const values = {
        [email.name]: email.value,
        [password.name]: password.value
    }
    console.log(values)
    form.reset();}
  
}

form.addEventListener("submit", validationForm);

