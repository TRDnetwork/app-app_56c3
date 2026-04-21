document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signup-form');
  const emailInput = document.getElementById('email');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      successMessage.textContent = 'Thank you! We’ll keep you updated.';
      successMessage.classList.add('show');
      emailInput.value = '';
      setTimeout(() => {
        successMessage.classList.remove('show');
      }, 5000);
    } else {
      successMessage.textContent = 'Please enter a valid email address.';
      successMessage.classList.add('show');
      setTimeout(() => {
        successMessage.classList.remove('show');
      }, 3000);
    }
  });
});