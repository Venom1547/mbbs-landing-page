// Smooth scroll to the "Apply Now" section
document.querySelector('a[href="#apply"]').addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default jump behavior
    document.querySelector("#apply").scrollIntoView({ behavior: "smooth" });
});

// Form validation for Apply Now form
document.getElementById("applyForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop default submission

    let nameField = document.getElementById("name");
    let emailField = document.getElementById("email");
    let phoneField = document.getElementById("phone");
    let countryField = document.getElementById("country");

    let name = nameField.value.trim();
    let email = emailField.value.trim();
    let phone = phoneField.value.trim();
    let country = countryField.value.trim();

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let phonePattern = /^[0-9]{10}$/; // Exactly 10 digits

    let errors = [];

    // Name validation
    if (name.length < 3) {
        errors.push("Name must be at least 3 characters long.");
    } 
    // Email validation
    if (!email.match(emailPattern)) {
        errors.push("Please enter a valid email.");
    } 
    // Phone validation
    if (!phone.match(phonePattern)) {
        errors.push("Enter a valid phone number with exactly 10 digits.");
    }
    // Country validation
    if (country === "") {
        errors.push("Please select a country preference.");
    }

    if (errors.length > 0) {
        alert(errors.join("\n")); // Show all errors at once
        return false; // ❌ STOP the form from submitting
    }

    // ✅ Encode input values for URL
    let encodedName = encodeURIComponent(name);
    let encodedEmail = encodeURIComponent(email);
    let encodedPhone = encodeURIComponent(phone);
    let encodedCountry = encodeURIComponent(country);

    // ✅ Google Form Pre-Fill Link (Make sure your field IDs are correct!)
    let googleFormURL = `https://docs.google.com/forms/d/e/1FAIpQLSffrxJsg2AbGKtvoeb3BsPMBa3REum3THhia3vuDmWRmZphaw/viewform?usp=pp_url
        &entry.2005620554=${encodedName}
        &entry.1045781291=${encodedEmail}
        &entry.1166974658=${encodedPhone}
        &entry.839337160=${encodedCountry}`;

    // ✅ Open Google Form only if everything is valid
    window.open(googleFormURL, "_blank"); 
});

