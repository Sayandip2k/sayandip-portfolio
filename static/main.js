// MOBILE NAV
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// TYPEWRITER EFFECT
const words = [
  "Products",
  "Systems",
  "Solutions",
  "Experiences"
];

const textEl = document.getElementById("typewriter-text");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    textEl.textContent = currentWord.slice(0, charIndex++);
    if (charIndex > currentWord.length) {
      setTimeout(() => isDeleting = true, 1200);
    }
  } else {
    textEl.textContent = currentWord.slice(0, charIndex--);
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 90);
}

typeEffect();

// ===== Scroll Reveal (safe) =====
const revealElements = document.querySelectorAll(
  ".hero-content, .hero-highlights, .image-frame"
);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.25 }
);

revealElements.forEach(el => revealObserver.observe(el));


