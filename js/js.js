document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".loaded");
    boxes.forEach((box, index) => {
        box.style.animationDelay = `${index * 0.2}s`; // Staggered delay for each box
        box.classList.add("animated"); // Add the class to trigger animation
    });
});
