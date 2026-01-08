// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Replace these with YOUR actual IDs from EmailJS dashboard
//     const serviceID = "service_vca6ew7";  // e.g., "service_abc123"
//     const templateID = "template_483xyte"; // e.g., "template_xyz789"

//     const templateParams = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value
//     };

//     document.getElementById('loading').style.display = 'block';

//     emailjs.send(serviceID, templateID, templateParams)
//         .then((response) => {
//             document.getElementById('loading').style.display = 'none';
//             document.getElementById("contact-form").reset(); // Cleaner way to reset
//             console.log('SUCCESS!', response.status, response.text);
//             alert("Your message has been sent successfully!");
//         })
//         .catch((error) => {
//             document.getElementById('loading').style.display = 'none';
//             console.error('FAILED...', error);
//             alert('Failed to send message. Please try again or contact via email directly.');
//         });
// });

console.log("✅ sent_gmail.js file loaded successfully!");

document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ DOM is ready!");
    
    const form = document.getElementById('contact-form');
    console.log("✅ Form found:", form);
    
    if (!form) {
        console.error("❌ ERROR: Contact form not found!");
        return;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("✅ Form submitted!");

        const serviceID = "service_vca6ew7";
        const templateID = "template_483xyte";

        const templateParams = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        console.log("🔍 CHECKING YOUR KEYS:");
        console.log("Public Key (from init):", "MFEsOYxbuS6NM66xZ");
        console.log("Service ID:", serviceID);
        console.log("Template ID:", templateID);
        console.log("Template Params:", templateParams);
        console.log("---");

        document.getElementById('loading').style.display = 'block';

        emailjs.send(serviceID, templateID, templateParams)
            .then((response) => {
                document.getElementById('loading').style.display = 'none';
                document.getElementById("contact-form").reset();
                console.log('✅ SUCCESS!', response);
                alert("Your message has been sent successfully!");
            })
            .catch((error) => {
                document.getElementById('loading').style.display = 'none';
                console.error('❌ FAILED...', error);
                alert('Failed to send message: ' + error.text);
            });
    });
});