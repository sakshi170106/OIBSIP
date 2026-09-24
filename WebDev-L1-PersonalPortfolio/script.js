/* ==========================
   PORTFOLIO JAVASCRIPT
========================== */

/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        }, 800);

    }

});


/* ==========================
   DARK MODE
========================== */

const darkBtn = document.getElementById("darkMode");

if (darkBtn) {

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark");
        darkBtn.innerHTML = "☀️";

    }

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");
            darkBtn.innerHTML = "☀️";

        } else {

            localStorage.setItem("theme", "light");
            darkBtn.innerHTML = "🌙";

        }

    });

}


/* ==========================
   MOBILE MENU
========================== */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}


/* Close Menu After Click */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {

            nav.classList.remove("active");

        }

    });

});


/* ==========================
   SCROLL PROGRESS BAR
========================== */

window.addEventListener("scroll", () => {

    const progressBar = document.getElementById("progressBar");

    if (!progressBar) return;

    const scrollTop = document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    progressBar.style.width = progress + "%";

});
/* ==========================
   ACTIVE NAVBAR
========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* ==========================
   TYPING EFFECT
========================== */

const typingText = document.querySelector(".hero-content h2");

if (typingText) {

    const words = [
        "Full Stack Developer",
        "Frontend Developer",
        "React Developer",
        "AI Enthusiast"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingText.textContent =
                currentWord.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentWord.length) {

                deleting = true;
                setTimeout(typeEffect, 1500);
                return;

            }

        } else {

            typingText.textContent =
                currentWord.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                deleting = false;
                wordIndex++;

                if (wordIndex >= words.length) {
                    wordIndex = 0;
                }

            }

        }

        setTimeout(typeEffect, deleting ? 60 : 120);

    }

    typeEffect();

}


/* ==========================
   SCROLL REVEAL
========================== */

const revealItems = document.querySelectorAll(
    ".card, .education-card, .program-card, .tool-card, .contact-card, .skill-box"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

revealItems.forEach(item => {

    item.classList.add("hidden");
    revealObserver.observe(item);

});


/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});
/* ==========================
   CONTACT FORM
========================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = this.querySelector("input[type='text']").value.trim();
        const email = this.querySelector("input[type='email']").value.trim();
        const message = this.querySelector("textarea").value.trim();

        if (name === "" || email === "" || message === "") {

            alert("Please fill in all the fields.");
            return;

        }

        alert(`Thank you, ${name}! Your message has been sent successfully.`);

        this.reset();

    });

}


/* ==========================
   BACK TO TOP BUTTON
========================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


/* ==========================
   IMAGE LAZY LOADING
========================== */

const images = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const img = entry.target;

            img.classList.add("loaded");

            observer.unobserve(img);

        }

    });

});

images.forEach(img => {

    imageObserver.observe(img);

});


/* ==========================
   BUTTON RIPPLE EFFECT
========================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = circle.style.height = `${diameter}px`;

        circle.style.left = `${e.offsetX - diameter / 2}px`;
        circle.style.top = `${e.offsetY - diameter / 2}px`;

        circle.classList.add("ripple");

        const ripple = this.querySelector(".ripple");

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});


/* ==========================
   CONSOLE MESSAGE
========================== */

console.log("%cWelcome to Sakshi's Portfolio 🚀", "color:#2563eb;font-size:18px;font-weight:bold;");
console.log("%cDesigned & Developed by Sakshi Handargule", "color:#0f172a;font-size:14px;");


/* ==========================
   COPYRIGHT YEAR
========================== */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}