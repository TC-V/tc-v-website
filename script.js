/*
==========================================================
TC-V WEBSITE
Technical Consulting Vierthaler
script.js
==========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");
    const progressBar = document.getElementById("progress-bar");

    /* ==========================================
       NAVBAR + PROGRESS BAR
    ========================================== */

    function updateScrollEffects(){

        const scrollTop = window.scrollY;

        if(scrollTop > 40){

            navbar.classList.add("scrolled");

        }else{

            navbar.classList.remove("scrolled");

        }

        const documentHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress =
            (scrollTop / documentHeight) * 100;

        progressBar.style.width = progress + "%";

    }

    updateScrollEffects();

    window.addEventListener("scroll", updateScrollEffects);

    /* ==========================================
       REVEAL ANIMATION
    ========================================== */

    const reveals = document.querySelectorAll(
        ".service-card,.feature-card,.target-card,.trust-card,.workflow-step,.about-card,.contact-form,.contact-item"
    );

    const revealObserver = new IntersectionObserver(

        (entries)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("reveal");
                    entry.target.classList.add("active");

                }

            });

        },

        {

            threshold:.15

        }

    );

    reveals.forEach(card=>{

        card.classList.add("reveal");

        revealObserver.observe(card);

    });

    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor=>{

            anchor.addEventListener("click",e=>{

                const target=document.querySelector(
                    anchor.getAttribute("href")
                );

                if(!target) return;

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });

            });

        });

});
/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar .nav-link");

function updateActiveNavigation(){

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if(href === "#" + current){

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNavigation);
updateActiveNavigation();

/* ==========================================
   HERO PARALLAX
========================================== */

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if(!hero) return;

    const offset = window.scrollY * 0.18;

    hero.style.transform =
        `translateY(${offset}px)`;

});

/* ==========================================
   BACKGROUND GLOW PARALLAX
========================================== */

const glowLeft = document.querySelector(".glow-left");
const glowRight = document.querySelector(".glow-right");

window.addEventListener("mousemove",(e)=>{

    const x =
        (e.clientX/window.innerWidth)-0.5;

    const y =
        (e.clientY/window.innerHeight)-0.5;

    if(glowLeft){

        glowLeft.style.transform =
            `translate(${x*35}px,${y*35}px)`;

    }

    if(glowRight){

        glowRight.style.transform =
            `translate(${-x*35}px,${-y*35}px)`;

    }

});

/* ==========================================
   HERO CARD TILT
========================================== */

const heroCard=document.querySelector(".hero-card");

if(heroCard){

heroCard.addEventListener("mousemove",(e)=>{

const rect=heroCard.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/18;

const rotateX=-(y-rect.height/2)/18;

heroCard.style.transform=

`perspective(900px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 translateY(-6px)`;

});

heroCard.addEventListener("mouseleave",()=>{

heroCard.style.transform="";

});

}

/* ==========================================
   BUTTON HOVER EFFECT
========================================== */

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transition=".3s";

button.style.transform="translateY(-4px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="";

});

});

/* ==========================================
   PERFORMANCE
========================================== */

let resizeTimer;

window.addEventListener("resize",()=>{

clearTimeout(resizeTimer);

resizeTimer=setTimeout(()=>{

updateScrollEffects();
updateActiveNavigation();

},150);

});

/* ==========================================
   END
========================================== */

});
