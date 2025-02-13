// Smooth scroll to the "Apply Now" section
document.querySelector('a[href="#apply"]').addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default jump behavior
    document.querySelector("#apply").scrollIntoView({ behavior: "smooth" });
});

// Form validation for Apply Now form
document.getElementById("applyForm").addEventListener("submit", function(event) {
    let name = document.querySelector('input[name="name"]').value.trim();
    let email = document.querySelector('input[name="email"]').value.trim();
    let phone = document.querySelector('input[name="phone"]').value.trim();
    
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let phonePattern = /^[0-9]{10}$/; // Exactly 10 digits

    let errorMessage = ""; // Store error message

    if (name.length < 3) {
        errorMessage = "Name must be at least 3 characters long.";
    } else if (!email.match(emailPattern)) {
        errorMessage = "Please enter a valid email.";
    } else if (!phone.match(phonePattern)) {
        errorMessage = "Enter a valid phone number with exactly 10 digits.";
    }

    if (errorMessage !== "") {
        alert(errorMessage);
        event.preventDefault(); // Prevent form submission
        return;
    }
});
