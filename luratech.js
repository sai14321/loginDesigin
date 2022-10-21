let userName = document.getElementById("username");
let userPassWord = document.getElementById("pass");
let button = document.getElementById("button");
let nameError = document.getElementById("namealert");
let passwordError = document.getElementById("passalert");
let success = document.getElementById("success");


button.onclick = function() {
    let userInput = userName.value;
    let passInput = userPassWord.value;

    if (userInput === "") {
        nameError.textContent = "please fill with your name";
        success.textContent = "";
    } else {
        nameError.textContent = "";
    }


    if (passInput === "" || passInput.length !== 8) {
        passwordError.textContent = "password length must be 8";
        success.textContent = "";
    } else {
        passwordError.textContent = "";
    }

    if (userInput !== "" && passInput.length === 8) {
        success.textContent = "Signup successfully";
    }
}