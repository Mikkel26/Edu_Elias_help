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

    // Load images into the page
    const productImages = [
        { id: "isoWhey", src: "images/PE_IsoWhey.png", alt: "ISO Whey 90" },
        { id: "collagenFit", src: "images/Quemador_CollagenFit.png", alt: "Collagen Fit" },
        { id: "diabolus", src: "images/Quemador_Diabulus.png", alt: "Diabolus" },
        { id: "proteinDT", src: "images/SUPLANTADOR_PROTEIN DT.png", alt: "Protein DT" },
        { id: "femPro", src: "images/PE_FEMPRO.png", alt: "FEM Pro" }
    ];

    productImages.forEach(product => {
        const imgElement = document.createElement("img");
        imgElement.src = product.src;
        imgElement.alt = product.alt;
        imgElement.className = "product-image";

        const productContainer = document.getElementById(product.id);
        if (productContainer) {
            productContainer.appendChild(imgElement);
        }
    });

    // Add company logo to the header
    const logo = document.querySelector(".company-logo");
    if (logo) {
        logo.src = "images/Logo.png";
        logo.alt = "S&I Sport Logo";
    }

    // Add social media icons
    const socialMedia = [
        { id: "facebook", src: "images/facebook-icon.png", alt: "Facebook", link: "https://www.facebook.com/edueliasc" },
        { id: "instagram", src: "images/instagram-icon.png", alt: "Instagram", link: "https://www.instagram.com/edueliasc/" }
    ];

    const socialMediaContainer = document.querySelector(".social-media");
    socialMedia.forEach(media => {
        const anchorElement = document.createElement("a");
        anchorElement.href = media.link;
        anchorElement.target = "_blank";

        const imgElement = document.createElement("img");
        imgElement.src = media.src;
        imgElement.alt = media.alt;
        imgElement.className = "social-icon";

        anchorElement.appendChild(imgElement);
        socialMediaContainer.appendChild(anchorElement);
    });
});
