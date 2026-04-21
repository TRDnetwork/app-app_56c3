document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");
  const emailInput = document.getElementById("email");
  const message = document.getElementById("form-message");

  // Form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      showMessage("Please enter your email.", "error");
    } else if (!emailRegex.test(email)) {
      showMessage("Please enter a valid email address.", "error");
    } else {
      showMessage("Thank you! We'll notify you when we launch.", "success");
      form.reset();
    }
  });

  // Show message with type
  function showMessage(text, type) {
    message.textContent = text;
    message.className = "form-message";
    message.classList.add(type, "show");
  }

  // Fade-in sections on scroll
  const sections = document.querySelectorAll(".content-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});