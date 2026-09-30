document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('mode-toggle');

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }

  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      form.reset();

      if (successMessage) {
        successMessage.style.display = 'block';
      }
    });
  }
});
