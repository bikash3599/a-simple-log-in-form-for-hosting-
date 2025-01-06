document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Simulate form submission (In real-life, use AJAX or a back-end server)
    setTimeout(() => {
        const responseMessage = document.getElementById('responseMessage');
        responseMessage.textContent = `Thank you, ${name}! Your details have been submitted successfully.`;
    }, 500);
});
