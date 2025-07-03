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
    setTimeout(type, 500);
  }

  // Navbar toggle
  const toggle = document.getElementById("menu-toggle");
  const navList = document.querySelector("nav ul");
  if (toggle && navList) {
    toggle.addEventListener("click", () => {
      navList.classList.toggle("show");
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link =>
    link.addEventListener("click", e => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    })
  );

  // Scroll reveal
  const revealElements = document.querySelectorAll(".reveal");

  function handleReveal() {
    revealElements.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", handleReveal);
  window.addEventListener("load", () => {
    handleReveal();
    document.querySelectorAll("#hero .reveal").forEach(el => el.classList.add("active"));
  });
});
