const form = document.getElementById("contactForm");

// ===== CREATE TOAST ELEMENT ONCE =====
const toast = document.createElement("div");
toast.className = "toast";
toast.innerText = "Message sent successfully!";
document.body.appendChild(toast);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const submitBtn = form.querySelector(".submit-btn");
  submitBtn.disabled = true;
  submitBtn.innerText = "Sending...";
  submitBtn.classList.add("loading");

  const formData = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value
  };

  console.log("Contact form data:", formData);

  // 🔗 Backend integration placeholder
  // fetch("/api/contact", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(formData)
  // })

  // ===== FAKE SUCCESS DELAY (UX PURPOSE) =====
  setTimeout(() => {
    // Show toast
    toast.classList.add("show");

    // Reset form
    form.reset();

    // Reset button
    submitBtn.disabled = false;
    submitBtn.innerText = "Send Message";
    submitBtn.classList.remove("loading");

    // Hide toast
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);

  }, 1200);
});
