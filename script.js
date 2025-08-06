document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector("#contactForm");
  const messageBox = document.querySelector("#messageBox");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Stop actual form submission

      // Get input values
      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const subject = document.querySelector("#subject").value;
      const message = document.querySelector("#message").value;

      // Check if all fields are filled
      if (!name || !email || !subject || !message) {
        messageBox.innerText = "Please fill in all fields!";
        messageBox.style.color = "red";
        return;
      }

      // Show confirmation message
      messageBox.innerText = `Thanks, ${name}! Your message has been submitted.`;
      messageBox.style.color = "green";

      // Optionally clear the form
      contactForm.reset();
    });
  }
});
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    })