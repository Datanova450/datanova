console.log("DataNova — Data Science • AI • Data Engineering");

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");
const navLinks = mainNav.querySelectorAll("a");

menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fermer le menu" : "Ouvrir le menu"
    );
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Ouvrir le menu");
    });
});
