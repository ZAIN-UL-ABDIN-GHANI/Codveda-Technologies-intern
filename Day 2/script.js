
        // Form elements
        const form = document.getElementById('contactForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const passwordInput = document.getElementById('password');
        const submitBtn = document.getElementById('submitBtn');
        const successPopup = document.getElementById('successPopup');
        const successMessage = document.getElementById('successMessage');
        const closePopupBtn = document.getElementById('closePopup');

        // Validation state
        const validationState = {
            name: false,
            email: false,
            phone: false,
            password: false
        };

        // Validation functions
        function validateName(name) {
            const nameRegex = /^[a-zA-Z\s]{2,50}$/;
            return nameRegex.test(name.trim());
        }

        function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email.trim());
        }

        function validatePhone(phone) {
            const phoneRegex = /^[\+]?[(]?[\d\s\-\(\)]{10,}$/;
            return phoneRegex.test(phone.trim());
        }

        function validatePassword(password) {
            return password.length >= 8;
        }

        function getPasswordStrength(password) {
            let strength = 0;
            const checks = [
                /.{8,}/, // Length
                /[a-z]/, // Lowercase
                /[A-Z]/, // Uppercase
                /[0-9]/, // Numbers
                /[^A-Za-z0-9]/ // Special characters
            ];

            checks.forEach(check => {
                if (check.test(password)) strength++;
            });

            if (strength <= 2) return 'weak';
            if (strength <= 3) return 'medium';
            return 'strong';
        }

        function updatePasswordStrength(password) {
            const strengthIndicator = document.getElementById('strengthFill');
            const strengthText = document.getElementById('strengthText');
            const strengthContainer = strengthIndicator.parentElement.parentElement;

            if (!password) {
                strengthContainer.className = 'password-strength';
                strengthText.textContent = 'None';
                return;
            }

            const strength = getPasswordStrength(password);
            strengthContainer.className = `password-strength strength-${strength}`;
            strengthText.textContent = strength.charAt(0).toUpperCase() + strength.slice(1);
        }

        function showError(fieldName, message) {
            const errorElement = document.getElementById(`${fieldName}Error`);
            const successElement = document.getElementById(`${fieldName}Success`);
            const inputElement = document.getElementById(fieldName);

            errorElement.textContent = message;
            errorElement.classList.add('show');
            successElement.classList.remove('show');
            inputElement.classList.remove('valid');
            inputElement.classList.add('invalid');
        }

        function showSuccess(fieldName, message) {
            const errorElement = document.getElementById(`${fieldName}Error`);
            const successElement = document.getElementById(`${fieldName}Success`);
            const inputElement = document.getElementById(fieldName);

            successElement.textContent = message;
            successElement.classList.add('show');
            errorElement.classList.remove('show');
            inputElement.classList.remove('invalid');
            inputElement.classList.add('valid');
        }

        function clearMessages(fieldName) {
            const errorElement = document.getElementById(`${fieldName}Error`);
            const successElement = document.getElementById(`${fieldName}Success`);
            const inputElement = document.getElementById(fieldName);

            errorElement.classList.remove('show');
            successElement.classList.remove('show');
            inputElement.classList.remove('valid', 'invalid');
        }

        function updateSubmitButton() {
            const allValid = Object.values(validationState).every(state => state);
            submitBtn.disabled = !allValid;
        }

        // Event listeners
        nameInput.addEventListener('input', (e) => {
            const value = e.target.value;
            if (!value) {
                clearMessages('name');
                validationState.name = false;
            } else if (validateName(value)) {
                showSuccess('name', '✓ Valid name format');
                validationState.name = true;
            } else {
                showError('name', 'Name must contain only letters and spaces (2-50 characters)');
                validationState.name = false;
            }
            updateSubmitButton();
        });

        emailInput.addEventListener('input', (e) => {
            const value = e.target.value;
            if (!value) {
                clearMessages('email');
                validationState.email = false;
            } else if (validateEmail(value)) {
                showSuccess('email', '✓ Valid email format');
                validationState.email = true;
            } else {
                showError('email', 'Please enter a valid email address');
                validationState.email = false;
            }
            updateSubmitButton();
        });

        phoneInput.addEventListener('input', (e) => {
            const value = e.target.value;
            if (!value) {
                clearMessages('phone');
                validationState.phone = false;
            } else if (validatePhone(value)) {
                showSuccess('phone', '✓ Valid phone number');
                validationState.phone = true;
            } else {
                showError('phone', 'Please enter a valid phone number (minimum 10 digits)');
                validationState.phone = false;
            }
            updateSubmitButton();
        });

        passwordInput.addEventListener('input', (e) => {
            const value = e.target.value;
            updatePasswordStrength(value);
            
            if (!value) {
                clearMessages('password');
                validationState.password = false;
            } else if (validatePassword(value)) {
                showSuccess('password', '✓ Password meets requirements');
                validationState.password = true;
            } else {
                showError('password', 'Password must be at least 8 characters long');
                validationState.password = false;
            }
            updateSubmitButton();
        });

        // Focus and blur effects
        const inputs = [nameInput, emailInput, phoneInput, passwordInput];
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.querySelector('.form-label').style.color = '#00e5ff';
            });

            input.addEventListener('blur', () => {
                input.parentElement.querySelector('.form-label').style.color = 'rgba(255, 255, 255, 0.9)';
            });
        });

        // Submit handler
        submitBtn.addEventListener('click', () => {
            if (Object.values(validationState).every(state => state)) {
                const userName = nameInput.value.split(' ')[0];
                successMessage.textContent = `Welcome ${userName}! Your account has been created successfully. You're all set to get started!`;
                successPopup.classList.add('show');
                
                // Reset form
                setTimeout(() => {
                    nameInput.value = '';
                    emailInput.value = '';
                    phoneInput.value = '';
                    passwordInput.value = '';
                    
                    Object.keys(validationState).forEach(key => {
                        validationState[key] = false;
                        clearMessages(key);
                    });
                    
                    updatePasswordStrength('');
                    updateSubmitButton();
                }, 2000);
            }
        });

        closePopupBtn.addEventListener('click', () => {
            successPopup.classList.remove('show');
        });

        // Close popup on outside click
        successPopup.addEventListener('click', (e) => {
            if (e.target === successPopup) {
                successPopup.classList.remove('show');
            }
        });

        // Initialize
        updateSubmitButton();
