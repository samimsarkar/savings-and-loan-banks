//Steps 1: add click event handler with the submit buttton

document.getElementById('submit-btn').addEventListener('click', function () {
    //Steps 2: get the email address inside the email to the input field
    // alawys remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // Steps 3: get password
    // 3.a set the id of an HTML element 
    // 3.b get the element 
    // 3.c get the from the element  

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // Danger: Do not varify the email and password in the client side 
    // Steps 5: varify email and password and check wather valid user or not

    if (email === 'user@savings-loan-bank.com' && password === 'Secrate') {
        window.location.href = "bank.html";
    }
    else {
        alert('tuke amra tejjo goshona korlam!! tui password bhule gechis');
    }
})