document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert('Registration successful');
        document.getElementById('pdfViewer').style.display = 'block';
    } else {
        alert('Please fill in all fields');
    }
});

