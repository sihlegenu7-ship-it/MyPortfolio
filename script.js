const toggleButton = document.getElementById("mode-toggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    alert('Form submitted successfully!');

    
    successMessage.style.display = 'block';
    form.reset();
  });
});
