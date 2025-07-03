// ============================
// Typed Text Animation
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const typed = document.querySelector(".typed-text");
  const words = ["Mohammad Juned Shaik", "a Tech Enthusiast"];
  let wordIndex = 0, charIndex = 0;

  function type() {
    if (charIndex < words[wordIndex].length) {
      typed.textContent += words[wordIndex][charIndex++];
      setTimeout(type, 100);
    } else setTimeout(erase, 2000);
  }
  function erase() {
    if (charIndex > 0) {
      typed.textContent = words[wordIndex].substring(0, --charIndex);
      setTimeout(erase, 50);
    } else {
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    }
  }
  typed.textContent = "";
  type();

  // ============================
  // Mobile Nav Toggle
  // ============================
  const toggle = document.getElementById("menu-toggle");
  const navList = document.querySelector("nav ul");
  toggle.addEventListener("click", () => navList.classList.toggle("show"));

  // ============================
  // Smooth Anchor Scroll
  // ============================
  document.querySelectorAll('a[href^="#"]').forEach(link =>
    link.addEventListener("click", e => {
      const id = link.getAttribute("href");
      if (id.length > 1) {
        e.preventDefault();
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
      }
    })
  );
});

// ============================
// Scroll Reveal
// ============================
const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}
// run once on load for hero (mobile) then on scroll
window.addEventListener("load", () => {
  document.querySelectorAll("#hero .reveal").forEach(el => el.classList.add("active"));
  revealOnScroll();
});
window.addEventListener("scroll", revealOnScroll);
