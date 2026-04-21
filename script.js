document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signup-form');
  const emailInput = document.getElementById('email-input');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple email validation
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Show success message
    successMessage.classList.remove('hidden');
    successMessage.classList.add('visible');
    form.reset();

    // Hide message after 5 seconds
    setTimeout(() => {
      successMessage.classList.remove('visible');
      successMessage.classList.add('hidden');
    }, 5000);
  });
});