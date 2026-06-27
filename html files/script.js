function validateForm() {

    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let alergies = document.getElementById("alergies").value;
    let contact = document.getElementById("contact").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;

    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        date === "" ||
        password === "" ||
        contact === "" ||
        alergies === ""
    ) {
        alert("Please fill all fields");
    }
    else if (phone.length !== 10) {
        alert("Phone number must be 10 digits");
    }
    else if (!email.includes("@")) {
        alert("Invalid Email");
    }
    else {

        let patient = {
            name: name,
            email: email,
            phone: phone
        };

        console.log(patient);

        alert("Registration Successful!");
    }
}