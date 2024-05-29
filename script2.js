const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const learnMoreBtn = document.getElementById('learnMoreBtn');

// Toggle the navigation menu on small screens
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Display an alert when the "Learn More" button is clicked
learnMoreBtn.addEventListener('click', () => {
    alert('Thank you for your interest in our web development services! Our team will be in touch with you soon.');
});