// Error messages
let errorMessages = {
    "emptyField": "The field is left empty",
    "invalidEmail": "Valid email required",
};

let emptyFieldError = true;
let invalidEmailError = true;

// DOM elements
const emailInput = document.querySelector('#email');
const errorPlaceholder = document.querySelector('#error-placeholder');
const newsletterForm = document.querySelector('#newsletter-form');
const submitFormBtn = document.querySelector('#submit-button');

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
    if(!emptyFieldError && !invalidEmailError) {
        newsletterForm.submit();
    }
});