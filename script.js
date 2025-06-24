// Typed Text Animation 
document.addEventListener("DOMContentLoaded", function () {
  const typedTextSpan = document.querySelector(".typed-text");
  const textArray = ["Mohammad Juned Shaik", "a Tech Enthusiast"];
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 2000);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
    } else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, 500);
    }
  }

  if (typedTextSpan) setTimeout(type, 500);
});


// Mobile Navbar Toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const navList = document.querySelector("nav ul");

  toggle.addEventListener("click", () => {
    navList.classList.toggle("show");
  });
});


// Optional: Scroll Reveal (if using .reveal elements) 
const revealElements = document.querySelectorAll(".reveal");

function handleScrollReveal() {
  revealElements.forEach((el) => {
    if (!el.classList.contains("no-animation")) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("active");
      }
    }
  });
}

window.addEventListener("scroll", handleScrollReveal);
window.addEventListener("load", handleScrollReveal);
document.addEventListener("DOMContentLoaded", function () {
  alert("JS loaded! This means JavaScript is working.");

  // Typed text test
  const span = document.querySelector(".typed-text");
  if (span) span.textContent = "It works!";

  // Toggle test
  const toggle = document.getElementById("menu-toggle");
  const navList = document.querySelector("nav ul");

  if (toggle && navList) {
    toggle.addEventListener("click", () => {
      navList.classList.toggle("show");
    });
  }
});

