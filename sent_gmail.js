document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const serviceID = "service_d80h0fp"; // Replace with your service ID
    const templateID = "template_iiixeuk"; // Replace with your template ID

    const para = {
        name: document.getElementById("name").value,
        email: document.getElementById("gmail").value,
        message: document.getElementById("message").value
    };

    // Show loading indicator
    document.getElementById('loading').style.display = 'block';

    emailjs.send(serviceID, templateID, para)
        .then((res) => {
            // Hide loading indicator
            document.getElementById('loading').style.display = 'none';

            document.getElementById("name").value = "";
            document.getElementById("gmail").value = "";
            document.getElementById("message").value = "";
            console.log('SUCCESS!', res.status, res.text);
            alert("Your message has been sent successfully.");
        })
        .catch(err => {
            // Hide loading indicator
            document.getElementById('loading').style.display = 'none';

            console.error('FAILED...', err);
            alert('Failed to send your message.');
        });
});
