const form = document.getElementById('form');
const first_name = document.getElementById('first-name');
const last_name = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

const first_name_message = document.getElementById('first-name-message');
const last_name_message = document.getElementById('last-name-message');
const email_message = document.getElementById('email-message');
const password_message = document.getElementById('password-message');


resetErrorMessages();

form.addEventListener('submit', e => {
    var first_name_error = null;
    var last_name_error = null;
    var email_error = null;
    var password_error = null;
    resetErrorMessages();
    first_name.style.borderColor = '#c7c7c7';
    last_name.style.borderColor = '#c7c7c7';
    email.style.borderColor = '#c7c7c7';
    password.style.borderColor = '#c7c7c7';
    if (first_name.value === '' || first_name.value == null) {
        first_name_error = 'First Name cannot be empty';
        first_name.style.borderColor = 'hsl(0, 100%, 74%)'
    }

    if (last_name.value === '' || last_name.value == null) {
        last_name_error = 'Last Name cannot be empty';
        last_name.style.borderColor = 'hsl(0, 100%, 74%)'
    }

    if (email.value === '' || email.value == null) {
        email_error = 'Email cannot be empty';
        email.style.borderColor = 'hsl(0, 100%, 74%)';
    }

    if (password.value === '' || password.value == null) {
        password_error = 'Password cannot be empty';
        password.style.borderColor = 'hsl(0, 100%, 74%)';
    }

    if (first_name_error || last_name_error || email_error || password_error) {
        e.preventDefault();
        first_name_message.innerText = first_name_error;
        last_name_message.innerText = last_name_error;
        email_message.innerText = email_error;
        password_message.innerText = password_error;
    } else {
        resetErrorMessages();
        alert('SUCCESS\nFIRST NAME: ' + first_name.value +
            '\nLAST NAME: ' + last_name.value +
            '\nEMAIL: ' + email.value);
    }
});

function resetErrorMessages() {
    first_name_message.innerText = null;
    last_name_message.innerText = null;
    email_message.innerText = null;
    password_message.innerText = null;
}