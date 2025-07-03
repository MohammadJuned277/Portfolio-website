// ============================
// Typed‑Text Animation
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const typed = document.querySelector(".typed-text");
  const words = ["Mohammad Juned Shaik", "a Tech Enthusiast"];
  let word = 0, char = 0;
  function type() {
    if (char < words[word].length) {
      typed.textContent += words[word][char++];
      setTimeout(type, 100);
    } else setTimeout(erase, 2000);
  }
  function erase() {
    if (char > 0) {
      typed.textContent = words[word].substring(0, --char);
      setTimeout(erase, 50);
    } else {
      word = (word + 1) % words.length;
      setTimeout(type, 500);
    }
  }
  typed.textContent = "";
  type();

  // ============================
  // Mobile Navbar Toggle
  // ============================
  const toggle = document.getElementById("menu-toggle");
  const nav = document.querySelector("nav ul");
  toggle.addEventListener("click", () => nav.classList.toggle("show"));

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
// Scroll‑Reveal Animation
// ============================
const reveals = document.querySelectorAll(".reveal");
function reveal() {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}
// ensure hero animates on first load (mobile)
window.addEventListener("load", () => {
  document.querySelectorAll("#hero .reveal").forEach(el => el.classList.add("active"));
  reveal();
});
window.addEventListener("scroll", reveal);
