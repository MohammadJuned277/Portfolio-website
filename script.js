document.addEventListener("DOMContentLoaded", () => {
    const typed = document.querySelector(".typed-text");
    const rolesContainer = document.getElementById("roles");

    if (typed && rolesContainer) {
        typed.textContent = "Mohammad Juned Shaik";

        rolesContainer.innerHTML = `
            <div class="subtitle-text">
                <span class="word">SYSTEMS ENGINEER</span>
                <span class="word">At EDGEVERVE SYSTEMS LIMITED</span>
            </div>
        `;

        const words = document.querySelectorAll("#roles .word");
        words.forEach((word, index) => {
            word.classList.add("subtitle-animate");
            word.style.animationDelay = `${index * 0.5}s`;
        });
    }

    // Toggle mobile nav
    const toggle = document.getElementById("menu-toggle");
    const navList = document.querySelector("nav ul");
    if (toggle && navList) {
        toggle.addEventListener("click", () => {
            navList.classList.toggle("show");
        });
    }

    // Smooth scroll
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

    // Tagline typing animation below photo
    const taglineElement = document.getElementById("animated-tagline");
    const taglineWords = [
        "Tech enthusiast ",
        "AI Explorer ",
        "Problem Solver "
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeTagline() {
        const currentWord = taglineWords[wordIndex];
        if (!taglineElement) return;

        if (isDeleting) {
            taglineElement.textContent = currentWord.substring(0, charIndex--);
        } else {
            taglineElement.textContent = currentWord.substring(0, charIndex++);
        }

        let delay = isDeleting ? 80 : 130;

        if (!isDeleting && charIndex === currentWord.length) {
            delay = 1500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % taglineWords.length;
            delay = 500;
        }

        setTimeout(typeTagline, delay);
    }

    typeTagline();
});


