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
    } else {
      setTimeout(erase, 2000);
    }
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

  if (typed) {
    typed.textContent = "";
    type();
  }

  // ============================
  // Mobile Navbar Toggle
  // ============================
  const toggle = document.getElementById("menu-toggle");
  const nav = document.querySelector("nav ul");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("show"));
  }

  // ============================
  // Smooth Scroll for Anchor Links
  // ============================
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId.length > 1) {
        e.preventDefault();
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
});

// ============================
// Scroll‑Reveal Animation
// ============================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

// Ensure hero section reveals on load (for mobile too)
window.addEventListener("load", () => {
  document.querySelectorAll("#hero .reveal").forEach((el) => {
    el.classList.add("active");
  });
  revealOnScroll();
});

window.addEventListener("scroll", revealOnScroll);
