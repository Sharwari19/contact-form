document.addEventListener('DOMContentLoaded', function() {
          
    const form = document.getElementById('contactForm');
    
    // Function to show error with shake animation
    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.animation = 'none'; 
        errorElement.offsetHeight; 
        errorElement.style.animation = null; 
    }

    // Function to clear error message
    function clearError(elementId) {
        document.getElementById(elementId).textContent = '';
    }
  
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset all error messages
        document.querySelectorAll('.error').forEach(el => el.textContent = '');
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        let isValid = true;
        
        if (name === '') {
            showError('nameError', 'Name is required');
            isValid = false;
        }
        
        if (email === '') {
            showError('emailError', 'Email is required');
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            // Simple regex to check email format
            showError('emailError', 'Invalid email format');
            isValid = false;
        }
  
        if (message === '') {
            showError('messageError', 'Message is required');
            isValid = false;
        }
        
        // If all validations pass
        if (isValid) {
            // Log form data to console or send this to a server
            console.log('Form submitted:', { name, email, message });
            
            const successMessage = document.getElementById('successMessage');
            successMessage.textContent = 'Thank you for your message. We will get back to you soon!';
            successMessage.style.animation = 'fadeIn 1s ease';
    
            form.reset();

            // Clear success message after 5 seconds
            setTimeout(() => {
                successMessage.textContent = '';
                successMessage.style.animation = 'none';
            }, 5000);
        }
    });

    document.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('focus', function() {
            this.previousElementSibling.style.color = 'var(--secondary-color)';
        });
        input.addEventListener('blur', function() {
            this.previousElementSibling.style.color = 'var(--primary-color)';
        });
    });
});