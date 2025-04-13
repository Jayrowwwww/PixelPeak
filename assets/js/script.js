// Menu button(Mobile view)
document.addEventListener("click", function () {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
    });
});
