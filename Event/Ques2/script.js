document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    function validateName() {
        if (nameInput.value.trim() === "") {
            nameError.style.display = "block";
            return false;
        } else {
            nameError.style.display = "none";
            return true;
        }
    }

    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.style.display = "block";
            return false;
        } else {
            emailError.style.display = "none";
            return true;
        }
    }

    function validatePassword() {
        if (passwordInput.value.length < 8) {
            passwordError.style.display = "block";
            return false;
        } else {
            passwordError.style.display = "none";
            return true;
        }
    }

    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    passwordInput.addEventListener("input", validatePassword);

    nameInput.addEventListener("blur", validateName);
    emailInput.addEventListener("blur", validateEmail);
    passwordInput.addEventListener("blur", validatePassword);

    const form = document.getElementById("registration-form");
    form.addEventListener("submit", function (e) {
        if (!validateName() || !validateEmail() || !validatePassword()) {
            e.preventDefault(); // Stop form submission
        }
    });
});
