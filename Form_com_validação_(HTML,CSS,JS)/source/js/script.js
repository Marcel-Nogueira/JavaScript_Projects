// FORM VALIDATIONS

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password_confirm = document.getElementById('password_confirm');


// validations on the submit button

form.addEventListener('submit', (event) => {
    event.preventDefault();
    checkForm();
    
})

// user name validation 

function checkInputUsername() {
    // get text that user typed
    const usernameValue = username.value;

    if (usernameValue === "") {
        errorInput(username, "Required User Name !")
    } else {
        const formItem = username.parentElement;
        formItem.className = "form_content";
    }

}

// email validation

function checkInputEmail() {
    const emailValue = email.value;
    if (emailValue === "") {
        errorInput(email, "Required Email Field !")
    } else {
        const formItem = email.parentElement;
        formItem.className = "form_content";
    }
}

// password validation 

function checkInputPassword() {
    const passwordValue = password.value;
    if (passwordValue === "") {
        errorInput(password, "Required Password Field !")
    } else if (passwordValue.length < 8) {
        errorInput(password, "Minimum 8 characters required")
    } else {
        const formItem = password.parentElement;
        formItem.className = "form_content";
    }
}

// password confirm validation

function checkInputPasswordConfirm() {
    const passwordValue = password.value;
    const passwordConfirmValue = password_confirm.value;
    if (passwordConfirmValue === "") {
        errorInput(password_confirm, "Required Password Confirm !")
    } else if (passwordConfirmValue !== password.value){
        errorInput(password_confirm, "Passwords don't match")

    } else {
        const formItem = password_confirm.parentElement;
        formItem.className = "form_content";
    }
        
}

// error processing function

function errorInput(input, message) {
    // Acessing father of input element (Form)
    const formItem = input.parentElement;
    // message item (a) 
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;

    formItem.className = "form_content error";
}

// form error cheking 

function checkForm () {

    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirm();

    const formItems = form.querySelectorAll('.form_content');

    // items array
    const isValid = [...formItems].every((item) => {
        return item.className === 'form_content'

    }); 

    if (isValid) {
        alert ('Sucess')
    }

}