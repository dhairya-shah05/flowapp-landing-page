const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    const icon = menuBtn.querySelector("i");
    if (mobileMenu.classList.contains("hidden")) {
        icon.className = "ri-menu-line";
    } else {
        icon.className = "ri-close-line";
    }
});