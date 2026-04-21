document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('email-form');
  const emailInput = document.getElementById('email');
  const successMessage = document.getElementById('success-message');
  let isSubmitting = false;

  // Set current year
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Register service worker for PWA
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }

  // Show success message
  const showSuccess = () => {
    successMessage.textContent = 'Thanks! We’ll notify you when we open.';
    successMessage.classList.add('show');

    // Hide message after 5 seconds
    setTimeout(() => {
      successMessage.classList.remove('show');
    }, 5000);
  };

  // Handle form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (isSubmitting) return;
    
    if (emailInput.validity.valid) {
      isSubmitting = true;
      showSuccess();
      form.reset();
      
      // Reset spam guard after animation completes
      setTimeout(() => {
        isSubmitting = false;
      }, 300);
    } else {
      emailInput.focus();
    }
  });
});