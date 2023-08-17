const passwordField = document.querySelector('#password');
const confirmField = document.querySelector('#confirm-password');
const sendButton = document.querySelector('#send-btn');
const passwordMinLength = 8;

function displayErrorMessage(msg) {
    const msgs = {
        'short': 'A senha precisa ter no mínimo 8 caracteres.',
        'notEqual': 'As senhas não são iguais',
    }

    if (!document.querySelector(`#${msg}`)) {
        let errorElement = document.createElement('p');
        errorElement.id = msg;
        errorElement.classList.add('password-error-msg');
        errorElement.innerText = msgs[msg];
        passwordField.parentElement.appendChild(errorElement);
        passwordField.style.border = '1px solid rgb(185, 48, 48)';
        confirmField.style.border = '1px solid rgb(185, 48, 48)';
    }

}

function removeMsg(msg) {
    const el = document.querySelector(`#${msg}`);
    if (el) el.remove();
}

function checkPasswordFields() {
    let niceLength = password.value.length >= passwordMinLength;
    let equalFields = passwordField.value === confirmField.value;

    if (!equalFields) {
        displayErrorMessage('notEqual');
        disableButton();
    } else {
        removeMsg('notEqual');
    }
    if (!niceLength) {
        displayErrorMessage('short');
        disableButton();
    } else {
        removeMsg('short');
    }
    if (niceLength && equalFields) {
        removeErrorMessages();
        freeButton();
    }
}

function disableButton() {
    if (!sendButton.classList.contains('disabled')) sendButton.classList.add('disabled');
}

function freeButton() {
    sendButton.classList.remove('disabled');
}

function removeErrorMessages() {
    const errorMessages = document.querySelectorAll('.password-error-msg');
    errorMessages.forEach(el => el.remove());
    passwordField.style.border = 'none';
    confirmField.style.border = 'none';
}

confirmField.addEventListener('blur', () => checkPasswordFields());
passwordField.addEventListener('blur', () => checkPasswordFields());