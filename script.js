document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector("#contactForm");
  const messageBox = document.querySelector("#messageBox");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); 

    
      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const subject = document.querySelector("#subject").value;
      const message = document.querySelector("#message").value;

      
      if (!name || !email || !subject || !message) {
        messageBox.innerText = "Please fill in all fields!";
        messageBox.style.color = "red";
        return;
      }

    
      messageBox.innerText = `Thanks, ${name} ! Your message has been submitted.`;
      messageBox.style.color = "white";

    
      contactForm.reset();
    });
  }
});
    

