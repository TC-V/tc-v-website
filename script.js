// =====================================================
// Technical Consulting Vierthaler
// script.js - Version 1.0
// =====================================================

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// Navbar background changes while scrolling
const navbar = document.querySelector(".navbar");

function updateNavbar() {
  if (!navbar) return;

  if (window.scrollY > 40) {
    navbar.style.transition = "all .3s ease";
    navbar.style.transform = "translateY(-6px)";
  } else {
    navbar.style.transform = "translateY(0)";
  }
}

window.addEventListener("scroll", updateNavbar);
updateNavbar();

// Fade-in animation using IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [
          { opacity: 0, transform: "translateY(30px)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        {
          duration: 700,
          easing: "ease-out",
          fill: "forwards"
        }
      );

      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});

// Placeholder for future language switch
const langButton = document.querySelector(".lang");

if (langButton) {
  langButton.addEventListener("click", () => {
    alert("Die Sprachumschaltung (DE | EN) folgt in einer späteren Version.");
  });
}

console.log("TC-V Website v1.0 geladen.");