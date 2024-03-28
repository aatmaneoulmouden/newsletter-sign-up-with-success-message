// HTML Elements
const newsletterForm = document.querySelector('#newsletter-form');

// Erorr messages
let emptyField = "The field is left empty";
let invalidEmail = "The email address is not formatted correctly";

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the email input
    const emailInput = newsletterForm.querySelector('#email');
    const errorPlaceholder = newsletterForm.querySelector('#error-placeholder');

    if(emailInput.value.length < 3) {
        errorPlaceholder.textContent = emptyField;
        console.log(emptyField);
    }
    
    // if(isValidEmail(emailInput.value)) {
    //     errorPlaceholder.textContent = invalidEmail;
    //     console.log(invalidEmail);
    // }
});

