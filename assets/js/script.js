emailjs.init("EjqaaSh7HJ8jmgz7v");
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const templateId = "template_23r8w0m"; 
    const userId = "EjqaaSh7HJ8jmgz7v"; 
    
    const formData = {
        from_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: `Email: - ${document.getElementById("email").value} \n Name: - ${document.getElementById("name").value} ${document.getElementById('message').value}`,
        subject: document.getElementById("subject").value,
        // Add other form fields as needed
    };
    
    emailjs.send("default_service", templateId, formData, userId)
        .then(function (response) {
            console.log("Email sent successfully:", response);
            alert("Email sent successfully!");
        }, function (error) {
            console.error("Email sending failed:", error);
            alert("Email sending failed.");
        });
});

