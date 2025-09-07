// --- Interactive Feature 1: Button Click Counter ---
// This section handles a simple counter that increments each time a button is clicked.
// ---------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const clickCounterBtn = document.getElementById('clickCounterBtn');
    const clickCountSpan = document.getElementById('clickCount');
    let count = 0;

    // Add a click event listener to the button
    clickCounterBtn.addEventListener('click', () => {
        count++; // Increment the counter
        clickCountSpan.textContent = count; // Update the displayed count
    });
});

// --- Interactive Feature 2: Content Toggle ---
// This section shows and hides a block of content with a button click.
// -------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleBtn');
    const toggledContent = document.getElementById('toggledContent');

    // Add a click event listener to the toggle button
    toggleBtn.addEventListener('click', () => {
        // Toggle the 'hidden' class on the content div
        toggledContent.classList.toggle('hidden');
        
        // Change the button text based on the content's visibility
        if (toggledContent.classList.contains('hidden')) {
            toggleBtn.textContent = 'Show Content';
        } else {
            toggleBtn.textContent = 'Hide Content';
        }
    });
});

// --- Custom Form Validation ---
// This section validates the contact form without using HTML5's built-in validation.
// It checks if fields are empty and validates the email format.
// ------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const formStatus = document.getElementById('formStatus');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        let isValid = true;
        
        // --- Validation for Name Field ---
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Name is required.');
            isValid = false;
        } else {
            hideError(nameInput);
        }

        // --- Validation for Email Field ---
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'Email is required.');
            isValid = false;
        } else if (!emailRegex.test(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email address.');
            isValid = false;
        } else {
            hideError(emailInput);
        }

        // --- Validation for Message Field ---
        if (messageInput.value.trim() === '') {
            showError(messageInput, 'Message is required.');
            isValid = false;
        } else {
            hideError(messageInput);
        }

        // If the form is valid, submit it and provide user feedback
        if (isValid) {
            formStatus.textContent = 'Form submitted successfully!';
            formStatus.classList.add('success-message');
            formStatus.classList.remove('error-message');
            contactForm.reset(); // Clear the form fields
        } else {
            formStatus.textContent = 'Please fix the errors in the form.';
            formStatus.classList.add('error-message');
            formStatus.classList.remove('success-message');
        }
    });

    // Helper function to display error messages
    function showError(inputElement, message) {
        const errorSpan = inputElement.nextElementSibling;
        errorSpan.textContent = message;
        errorSpan.style.display = 'block';
        inputElement.classList.add('invalid');
    }

    // Helper function to hide error messages
    function hideError(inputElement) {
        const errorSpan = inputElement.nextElementSibling;
        errorSpan.textContent = '';
        errorSpan.style.display = 'none';
        inputElement.classList.remove('invalid');
    }
});