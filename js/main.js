document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form form');
    const nameInput = document.getElementById('name');
    const numberInput = document.getElementById('number');
    const emailInput = document.getElementById('email');

    // Prevent space at the start of name input
    nameInput.addEventListener('input', function() {
        if (this.value.startsWith(' ')) {
            this.value = this.value.trimStart();
        }
    });

    // Validate the form on submit
    form.addEventListener('submit', function(event) {
        let valid = true;

        // Validate Name
        if (nameInput.value.length < 3) {
            valid = false;
            alert('Name must be at least 3 characters long.');
        }

        // Validate Phone Number
        const phoneRegex = /^((\+91)?[6789]\d{9})$/;
        if (!phoneRegex.test(numberInput.value)) {
            valid = false;
            alert('Phone number must be 10 digits long and start with 6, 7, 8, or 9.');
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            valid = false;
            alert('Please enter a valid email address.');
        }

        if (!valid) {
            event.preventDefault(); // Prevent form submission
        }
    });

    // Limit phone number input length and format
    numberInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, ''); // Allow only numbers
        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10); // Limit to 10 digits
        }
        if (this.value.length === 10 && !this.value.startsWith('6') && !this.value.startsWith('7') && !this.value.startsWith('8') && !this.value.startsWith('9')) {
            this.value = ''; // Clear if not starting with valid digits
            alert('Phone number must start with 6, 7, 8, or 9.');
        }
    });

    // Suggest email domains
    const emailDomains = ['gmail.com', 'hotmail.com', 'yahoo.com'];
    emailInput.addEventListener('input', function() {
        const input = this.value;
        const atIndex = input.indexOf('@');
        if (atIndex > -1) {
            const domainSuggestions = emailDomains.map(domain => input.substring(0, atIndex + 1) + domain);
            // Here you would typically implement a dropdown for suggestions
            // For simplicity, we just log to console
            console.log('Suggestions:', domainSuggestions);
        }
    });
});