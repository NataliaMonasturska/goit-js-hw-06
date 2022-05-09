const Form = document.querySelector("form.login-form");

const ValidationForm = (event) => {
    event.preventDefault();
    const Email = event.currentTarget.elements.email;
    const Password = event.currentTarget.elements.password;

    if (Email.value === ""||Password.value === "") {
        alert("Все поля должны быть заполнены!")
       
    }
    else{const Values = {
        [Email.name]: Email.value,
        [Password.name]: Password.value
    }
    console.log(Values)
    Form.reset();}
  
}

Form.addEventListener("submit", ValidationForm )

