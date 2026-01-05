document.addEventListener('DOMContentLoaded', () => {
    // gallery
    const overlay = document.getElementById("overlay");
    const overlayImg = document.getElementById("overlayImg");

    if (overlay && overlayImg) {
        document.querySelectorAll(".gallery-item img").forEach(img => {
            img.addEventListener("click", () => {
                overlayImg.src = img.src;
                overlay.style.display = "flex";
            });
        });
        overlay.addEventListener("click", () => {
            overlay.style.display = "none";
        });
    }

    // menu
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
    }
});
