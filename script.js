// ==========================================
// Technical Consulting Vierthaler
// script.js v2.0
// ==========================================

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// Navigation beim Scrollen
const navbar = document.querySelector(".navbar");

function updateNavbar() {

  if (!navbar) return;

  const container = navbar.querySelector(".container");

  if (window.scrollY > 40) {

    navbar.style.top = "10px";

    if (container) {
      container.style.background = "rgba(8,12,20,.80)";
      container.style.boxShadow = "0 20px 45px rgba(0,0,0,.45)";
    }

  } else {

    navbar.style.top = "18px";

    if (container) {
      container.style.background = "rgba(8,12,20,.55)";
      container.style.boxShadow = "";
    }
  }
}

window.addEventListener("scroll", updateNavbar);
updateNavbar();


// Fade-In Animation
const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (!entry.isIntersecting) return;

    entry.target.animate(
      [
        {
          opacity: 0,
          transform: "translateY(35px)"
        },
        {
          opacity: 1,
          transform: "translateY(0)"
        }
      ],
      {
        duration: 650,
        easing: "ease-out",
        fill: "forwards"
      }
    );

    observer.unobserve(entry.target);

  });

},{
  threshold:0.15
});

document.querySelectorAll(".service-card, section").forEach(el=>{
  observer.observe(el);
});


// Hero Hintergrund leicht bewegen
const hero = document.querySelector(".hero-bg");

window.addEventListener("mousemove", e=>{

  if(!hero) return;

  const x=(e.clientX/window.innerWidth-0.5)*20;
  const y=(e.clientY/window.innerHeight-0.5)*20;

  hero.style.transform=`translate(${x}px, ${y}px)`;

});

console.log("TC-V Website Version 2.0 geladen");