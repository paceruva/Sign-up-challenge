const submitButton = document.querySelector('#submitButton');

submitButton.addEventListener('click', function() {
    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    if(firstName.firstChild.nextSibling.value == "") {
        firstName.classList.add("error");
        document.querySelector('#nameErrorMessage').classList.add("visible");
    } else {
        const nameError = document.querySelector('#nameErrorMessage');
        if(nameError.classList.contains("visible")) {
            nameError.classList.remove("visible");
        }
        if(firstName.classList.contains("error")) {
            firstName.classList.remove("error");
        }
    }

    if(lastName.firstChild.nextSibling.value == "") {
        lastName.classList.add("error");
        document.querySelector('#lastNameErrorMessage').classList.add("visible");
    } else {
        const lastNameError = document.querySelector('#lastNameErrorMessage')
        if(lastNameError.classList.contains("visible")) {
            lastNameError.classList.remove("visible");
        }
        if(lastName.classList.contains("error")) {
            lastName.classList.remove("error");
        }
    }

    var regEx =  	
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var correctEmail = regEx.test(email.firstChild.nextSibling.value);
    if(email.firstChild.nextSibling.value == "" || !correctEmail) {
        email.classList.add("error");
        document.querySelector('#emailErrorMessage').classList.add("visible");
        if(email.firstChild.nextSibling.value == "") {
            document.querySelector('#emailErrorMessage').innerHTML = "Email cannot be empty";
        } else if(!correctEmail) {
            document.querySelector('#emailErrorMessage').innerHTML = "Looks like this is not an email";
        }
    } else {
        const emailError = document.querySelector('#emailErrorMessage');
        if(emailError.classList.contains("visible")) {
            emailError.classList.remove("visible");
        }
        if(email.classList.contains("error")) {
            email.classList.remove("error");
        }
    }

    if(password.firstChild.nextSibling.value == "") {
        password.classList.add("error");
        document.querySelector('#passwordErrorMessage').classList.add("visible");
    } else {
        const passwordError = document.querySelector('#passwordErrorMessage');
        if(passwordError.classList.contains("visible")) {
            passwordError.classList.remove("visible");
        }
        if(password.classList.contains("error")) {
            password.classList.remove("error");
        }
    }
})