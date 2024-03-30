// Errors
let errorMessages = {
    "emptyField": "The field is left empty",
    "invalidEmail": "Valid email required",
};

let emptyFieldError = true;
let invalidEmailError = true;

// DOM elements
const form = document.querySelector('#form');
const message = document.querySelector('#message');
const emailInput = document.querySelector('#email');
const emailOutput = document.querySelector('#email-output');
const errorPlaceholder = document.querySelector('#error-placeholder');
const newsletterForm = document.querySelector('#newsletter-form');
const submitFormBtn = document.querySelector('#submit-button');
const dismissMessageBtn = document.querySelector('#dismiss-msg-btn');

// Functions
const toggleShowedClass = (removeFrom, addTo) => {
    removeFrom.classList.remove('showed');
    addTo.classList.add('showed');
};

// This event listener validates the email input field in real-time, displaying an error message if it's empty.
emailInput.addEventListener('input', () => {
    if (emailInput.value.length < 1) {
        errorPlaceholder.textContent = errorMessages.emptyField;
        emailInput.classList.add('has-error');
        emptyFieldError = true;
    } else {
        errorPlaceholder.textContent = '';
        emailInput.classList.remove('has-error');
        emptyFieldError = false;
    }
});

// This event listener validates the email input field on focus out, displaying an error message if the input is not a valid email address.
emailInput.addEventListener('focusout', () => {
    let emailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (emailInput.value.length > 1 && !emailInput.value.match(emailReg)) {
        errorPlaceholder.textContent = errorMessages.invalidEmail;
        emailInput.classList.add('has-error');
        invalidEmailError = true;
    } else {
        invalidEmailError = false;
    }
});

// This event listener submitted the form when there is no error
submitFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(emptyFieldError) {
        errorPlaceholder.textContent = errorMessages.emptyField;
        emailInput.classList.add('has-error');
        emptyFieldError = true;
    }

    if (!emptyFieldError && !invalidEmailError) {
        console.log(emailInput.value);
        emailOutput.textContent = emailInput.value;
        toggleShowedClass(form, message);
    }
});

// This event listener dissmissed the message popup when click on 'Dissmiss message' button
dismissMessageBtn.addEventListener('click', () => toggleShowedClass(message, form));