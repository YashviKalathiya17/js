function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let isValid = true;

    if (name.length < 3) {
        document.getElementById("nameError").innerText = "Enter a valid name (min 3 letters)";
        isValid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    if (!email.includes("@")) {
        document.getElementById("emailError").innerText = "Enter a valid email";
        isValid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    if (phone.length !== 10 || isNaN(phone)) {
        document.getElementById("phoneError").innerText = "Enter a valid 10-digit phone number";
        isValid = false;
    } else {
        document.getElementById("phoneError").innerText = "";
    }

    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
        isValid = false;
    } else {
        document.getElementById("passwordError").innerText = "";
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
        isValid = false;
    } else {
        document.getElementById("confirmPasswordError").innerTexએt = "";
    }

    return isValid;
}

