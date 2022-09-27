const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("user_email");
const phone = document.getElementById("user_number");
const firstPswd = document.getElementById("user_password");
const confirmPswd = document.getElementById("confirm_pswd");

const createBTN = document.getElementById("createBTN");


createBTN.addEventListener("click", (event) => {
    if (firstName.validity.typeMismatch){
        firstName.setCustomValidity("Please enter your name.");
        firstName.reportValidity();
    } else {
        firstName.setCustomValidity("");
    }
});