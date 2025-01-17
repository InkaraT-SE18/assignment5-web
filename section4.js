function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let errorMessages = document.getElementById("errorMessages");


    errorMessages.innerHTML = "";

    let hasError = false;

    if (name.trim() === "") {
        errorMessages.innerHTML += "Name is required.<br>";
        hasError = true;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.trim() === "") {
        errorMessages.innerHTML += "Email is required.<br>";
        hasError = true;
    } else if (!email.match(emailPattern)) {
        errorMessages.innerHTML += "Please enter a valid email address.<br>";
        hasError = true;
    }

    if (password.trim() === "") {
        errorMessages.innerHTML += "Password is required.<br>";
        hasError = true;
    } else if (password.length < 8) {
        errorMessages.innerHTML += "Password must be at least 8 characters long.<br>";
        hasError = true;
    }

    if (confirmPassword.trim() === "") {
        errorMessages.innerHTML += "Please confirm your password.<br>";
        hasError = true;
    } else if (password !== confirmPassword) {
        errorMessages.innerHTML += "Passwords do not match.<br>";
        hasError = true;
    }

    if (hasError) {
        return false;
    } else {
        alert("Form submitted successfully!");
        return true;
    }
}
const clickSound = document.getElementById("click-button");

// Функция для воспроизведения звука
function playSound() {
    clickSound.currentTime = 0; // Сбрасываем звук к началу, если он уже играет
    clickSound.play();
}

document.getElementById("click").addEventListener("click", playSound);
