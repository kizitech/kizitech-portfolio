(function () {
    emailjs.init("Dd2Ytu39LhkahjSlB");

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const form = this;

        emailjs.sendForm("service_ddj0fsi", "template_txficv9", form)
            .then(function (response) {

                form.reset();

                if (response.status === 200) {
                    document.getElementById("contact-message").innerHTML = "Message sent successfully! ✅";
                } else {
                    document.getElementById("contact-message").innerHTML = "Failed to send the message. Please try again. ⚠️";
                }
            })
            .catch(function (error) {
                console.error("Error sending email: ", error);
            });
    });
})();