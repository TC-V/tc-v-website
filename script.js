/* ==========================================================
   Technical Consulting Vierthaler
   Version 2.0
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector("header");
    const progressBar = document.getElementById("progress-bar");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    /* ======================================================
       STICKY HEADER
    ====================================================== */

    function updateHeader() {

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    updateHeader();

    /* ======================================================
       PROGRESS BAR
    ====================================================== */

    function updateProgressBar() {

        const scrollTop = window.scrollY;

        const docHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percent = (scrollTop / docHeight) * 100;

        progressBar.style.width = percent + "%";

    }

    updateProgressBar();

    /* ======================================================
       ACTIVE NAVIGATION
    ====================================================== */

    function updateNavigation() {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            if (window.scrollY >= top) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    updateNavigation();

    /* ======================================================
       SMOOTH SCROLL
    ====================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (!target) return;

            window.scrollTo({

                top: target.offsetTop - 90,

                behavior: "smooth"

            });

        });

    });
    
    /* ======================================================
       REVEAL ANIMATION
    ====================================================== */

    const revealElements = document.querySelectorAll(
        ".target-card, .service-card, .workflow-card, .feature-card, .about-card, .contact-item, .contact-form"
    );

    revealElements.forEach(element => {

        element.classList.add("reveal");

    });

    const revealObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },

        {

            threshold: 0.15

        }

    );

    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

    /* ======================================================
       HERO PARALLAX
    ====================================================== */

    const hero = document.querySelector(".hero");

    window.addEventListener("scroll", () => {

        const offset = window.scrollY;

        if (hero) {

            hero.style.transform =
                `translateY(${offset * 0.15}px)`;

        }

    });

    /* ======================================================
       HERO CARD TILT
    ====================================================== */

    const heroCard = document.querySelector(".hero-card");

    if (heroCard) {

        heroCard.addEventListener("mousemove", (event) => {

            const rect = heroCard.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const rotateY =
                ((x / rect.width) - 0.5) * 10;

            const rotateX =
                ((rect.height / 2 - y) / rect.height) * 10;

            heroCard.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-6px)`;

        });

        heroCard.addEventListener("mouseleave", () => {

            heroCard.style.transform =
                "perspective(900px) rotateX(0) rotateY(0) translateY(0)";

        });

    }

    /* ======================================================
       BUTTON HOVER EFFECT
    ====================================================== */

    document.querySelectorAll(".btn").forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transform = "translateY(-3px)";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "";

        });

    });

    /* ======================================================
       WINDOW EVENTS
    ====================================================== */

    window.addEventListener("scroll", () => {

        updateHeader();
        updateProgressBar();
        updateNavigation();

    });

    window.addEventListener("resize", () => {

        updateNavigation();

    });

});
