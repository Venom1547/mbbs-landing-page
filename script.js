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
    let phonePattern = /^[0-9]{10,}$/; // At least 10 digits
    
    if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        event.preventDefault();
    } else if (!email.match(emailPattern)) {
        alert("Please enter a valid email.");
        event.preventDefault();
    } else if (!phone.match(phonePattern)) {
        alert("Enter a valid phone number with at least 10 digits.");
        event.preventDefault();
    }
});
