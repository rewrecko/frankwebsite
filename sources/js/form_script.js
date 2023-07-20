var nameError = document.getElementById('name-error');
var mailError = document.getElementById('mail-error');
var subjectError = document.getElementById('subject-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('contact-name').value;

    if(name.length == 0) {
        nameError.innerHTML = 'campo obbligatorio';
        return false;
    }

    nameError.innerHTML = 'ok';
    return true;
}

function validateMail() {
    var mail = document.getElementById('contact-mail').value;

    if(mail.length == 0) {
        mailError.innerHTML = 'campo obbligatorio';
        return false;
    }

    mailError.innerHTML = 'ok';
    return true;
}

function validateSubject() {
    var subject = document.getElementById('contact-subject').value;

    if(subject.length == 0) {
        subjectError.innerHTML = 'campo obbligatorio';
        return false;
    }

    subjectError.innerHTML = 'ok';
    return true;
}

function validateMessage() {
    var message = document.getElementById('contact-message').value;

    if(message.length == 0) {
        messageError.innerHTML = 'campo obbligatorio';
        return false;
    }

    messageError.innerHTML = 'ok';
    return true;
}

function validateCheck() {  

    var box = document.getElementById('consent')

    if(document.getElementById('consent').checked) {
        box.style.borderColor = "white"; 
        return true;
    } else {
        box.style.borderColor = "red"; 
        return false;
    }
}

function validateForm() {
    if(!validateName() || !validateMail() || !validateSubject() || !validateMessage() || !validateCheck()) {
        submitError.innerHTML = 'Per favore controlla di aver inserito tutti i dati correttamente e di aver accettato il checkbox.';
        return false;
    }
}