// Error messages
let errorMessages = {
    "emptyField": "The field is left empty",
    "invalidEmail": "Valid email required",
};

// DOM elements
const emailInput = document.querySelector('#email');
const errorPlaceholder = document.querySelector('#error-placeholder');

// This event listener validates the email input field in real-time, displaying an error message if it's empty.
emailInput.addEventListener('input', () => {
    if (emailInput.value.length < 1) {
        errorPlaceholder.textContent = errorMessages.emptyField;
        emailInput.classList.add('has-error');
    } else {
        errorPlaceholder.textContent = '';
        emailInput.classList.remove('has-error');
    }
});

// This event listener validates the email input field on focus out, displaying an error message if the input is not a valid email address.
emailInput.addEventListener('focusout', () => {
    let emailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (emailInput.value.length > 1 && !emailInput.value.match(emailReg)) {
        errorPlaceholder.textContent = errorMessages.invalidEmail;
        emailInput.classList.add('has-error');
    }
});