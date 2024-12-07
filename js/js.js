document.querySelectorAll("nav ul li a").forEach((button) => {
    button.addEventListener("click", (event) => {
        // Prevent multiple activations in quick succession
        if (button.classList.contains("active")) return;

        // Add the "active" class
        button.classList.add("active");

        // Remove the "active" class after 0.3s
        setTimeout(() => {
            button.classList.remove("active");
        }, 300);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    nav.setAttribute("data-page-loaded", "true");
});