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
            date: date,
            allergies: alergies,
            contact: contact,
            email: email,
            phone: phone
        };

        console.log(patient);

        document.getElementById("message").innerHTML =
            "Registration Successful!";

        document.getElementById("patientInfo").innerHTML =
            `
        <p><b>Name:</b> ${patient.name}</p>
        <p><b>Date of Birth:</b> ${patient.date}</p>
        <p><b>Allergies:</b> ${patient.allergies}</p>
        <p><b>Emergency Contact:</b> ${patient.contact}</p>
        <p><b>Email:</b> ${patient.email}</p>
        <p><b>Phone:</b> ${patient.phone}</p>
        `;
    }
}