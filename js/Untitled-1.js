/* =================================
   NAVBAR SCROLL EFFECT
================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =================================
   ACTIVE NAVIGATION
================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

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


/* =================================
   CLOSE MOBILE NAVBAR
================================= */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        const navbarCollapse =
            document.querySelector(".navbar-collapse");

        if (navbarCollapse.classList.contains("show")) {

            new bootstrap.Collapse(navbarCollapse).hide();

        }

    });

});


/* =================================
   THEME BUTTON
================================= */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("dark-mode")) {

        icon.classList.remove("bi-sun");
        icon.classList.add("bi-moon");

    } else {

        icon.classList.remove("bi-moon");
        icon.classList.add("bi-sun");

    }

});


/* =================================
   CURRENT YEAR
================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =================================
   NEWSLETTER
================================= */

const newsletter =
    document.querySelector(".newsletter-form");

newsletter.addEventListener("submit", function(event) {

    event.preventDefault();

    const input = newsletter.querySelector("input");

    if (input.value.trim() !== "") {

        alert("Thank you for subscribing!");

        input.value = "";

    }

});cr