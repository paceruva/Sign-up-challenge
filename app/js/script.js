const submitButton = document.querySelector('#submitButton');

function validateEmptyData($inputName) {
    const input = document.querySelector($inputName);
    const error = document.querySelector($inputName+"ErrorMessage");
    var $validation = input.firstChild.nextSibling.value == "";
    if($validation) {
        input.classList.add("error");
        error.classList.add("visible");
    } else {
        if(error.classList.contains("visible")) {
            error.remove("visible");
        }
        if(input.classList.contains("visible")) {
            input.classList.remove("visible");
        }
    }
}

function validateEmail() {
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
}

submitButton.addEventListener('click', function() {
    validateEmptyData("#firstName");
    validateEmptyData("#lastName");
    validateEmail();
    validateEmptyData("#password");    
})