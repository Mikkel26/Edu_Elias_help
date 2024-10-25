// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 20,
            behavior: "smooth"
        });
    }
});
