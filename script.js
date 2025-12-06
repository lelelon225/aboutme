function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("open");
}

function darkmode() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    
    if (currentTheme === 'dark-mode') {
        root.removeAttribute('data-theme');
    } else {
        root.setAttribute('data-theme', 'dark-mode');
    }
}

function submitMail() {
    alert("Thank you for your message. I will get back to you shortly!");
}

// Contact form validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Clear previous errors
            const errorElements = document.querySelectorAll('.error-message');
            errorElements.forEach(el => el.style.display = 'none');

            // Get form values
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validation flags
            let isValid = true;

            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === '' || !emailPattern.test(email)) {
                const emailError = document.getElementById('emailError');
                if (emailError) {
                    emailError.textContent = 'Valid email is required';
                    emailError.style.display = 'block';
                }
                isValid = false;
            }

            // Message validation
            if (message === '') {
                const messageError = document.getElementById('messageError');
                if (messageError) {
                    messageError.textContent = 'Message is required';
                    messageError.style.display = 'block';
                }
                isValid = false;
            }

            // If form is valid, submit it
            if (isValid) {
                alert('Form submitted successfully!');
                contactForm.reset(); // Optional: clear the form after submission
            }
        });
    }
});