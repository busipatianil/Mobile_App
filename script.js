document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const otpForm = document.getElementById('otp-form');
    const forgotPasswordForm = document.getElementById('forgot-password-form');

    const showSignupLink = document.getElementById('show-signup');
    const showLoginFromSignupLink = document.getElementById('show-login-from-signup');
    const showForgotPasswordLink = document.getElementById('show-forgot-password');
    const showLoginFromForgotLink = document.getElementById('show-login-from-forgot');
    const resendOtpLink = document.getElementById('resend-otp');

    function showForm(formToShow) {
        [loginForm, signupForm, otpForm, forgotPasswordForm].forEach(form => {
            form.classList.remove('active');
        });
        formToShow.classList.add('active');
    }

    // Navigation
    showSignupLink.addEventListener('click', (e) => {
        e.preventDefault();
        showForm(signupForm);
    });

    showLoginFromSignupLink.addEventListener('click', (e) => {
        e.preventDefault();
        showForm(loginForm);
    });

    showForgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        showForm(forgotPasswordForm);
    });

    showLoginFromForgotLink.addEventListener('click', (e) => {
        e.preventDefault();
        showForm(loginForm);
    });

    // Form Submissions (for demonstration, these will just switch forms)

    // Login Form
    loginForm.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        alert(`Login attempt for: ${email} with password: ${password}`);
        // In a real app, you'd send this to your backend for authentication
        // If successful, redirect or show dashboard
        // If failed, show error message
    });

    // Sign Up Form
    signupForm.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        alert(`Sign Up attempt for: ${name}, ${email}, ${password}`);
        // In a real app, send to backend. If successful, then proceed to OTP verification.
        showForm(otpForm); // Assuming successful signup leads to OTP
    });

    // OTP Form
    otpForm.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const otp = document.getElementById('otp-input').value;
        alert(`OTP entered: ${otp}`);
        // In a real app, send to backend for verification.
        // If successful, show a success message and potentially log them in or redirect.
        // For now, let's just go back to login.
        alert('OTP Verified! You can now log in.');
        showForm(loginForm);
    });

    resendOtpLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Resending OTP...');
        // In a real app, trigger backend to resend OTP
    });

    // Forgot Password Form
    forgotPasswordForm.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('forgot-email').value;
        alert(`Forgot password request for: ${email}`);
        // In a real app, send to backend to send a reset link/code to the email.
        alert('If an account exists, a password reset link has been sent to your email.');
        showForm(loginForm); // Go back to login after requesting reset
    });
});
