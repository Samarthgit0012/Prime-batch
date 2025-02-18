function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');
    let city = document.getElementById("city").value;
    let dob = document.getElementById("dob").value;
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();
    
    if (name === "") {
        alert("Name is required.");
        return false;
    }
    
    if (email === "" || !email.includes("@") || !email.includes(".")) {
        alert("Enter a valid email.");
        return false;
    }
    
    if (password === "" || password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }
    
    if (!gender) {
        alert("Please select your gender.");
        return false;
    }

    let hobbies = document.querySelectorAll('input[name="hobbies"]:checked');
    if (hobbies.length === 0) {
        alert("Select at least one hobby.");
        return false;
    }

    if (city === "") {
        alert("Please select a city.");
        return false;
    }

    if (dob === "") {
        alert("Please enter your date of birth.");
        return false;
    }

    let phonePattern = /^[0-9]{10}$/;
    if (!phone.match(phonePattern)) {
        alert("Enter a valid 10-digit phone number.");
        return false;
    }

    if (address === "") {
        alert("Address cannot be empty.");
        return false;
    }

    return true;
}
