document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const formLink = 'https://forms.gle/ASnpfRAyvNQB57em8';

    const formData = new FormData();
    formData.append('entry.YOUR_NAME_ENTRY_ID', name);
    formData.append('entry.YOUR_EMAIL_ENTRY_ID', email);
    formData.append('entry.YOUR_MESSAGE_ENTRY_ID', message);

    fetch(formLink, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    }).then(() => {
        alert('Message sent successfully!');
        document.getElementById('contactForm').reset();
    }).catch(() => {
        alert('There was an error sending your message. Please try again.');
    });
});