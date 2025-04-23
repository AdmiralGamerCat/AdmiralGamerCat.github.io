// smoothly slide in content on page load
document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".loaded");
    boxes.forEach((box, index) => {
        box.style.animationDelay = `${index * 0.2}s`; // Staggered delay for each box
        box.classList.add("animated"); // Add the class to trigger animation
    });
});

// for rainbow background
const wipImg = document.querySelector('.wip-img');
const body = document.body;

wipImg.addEventListener('mouseenter', () => {
    body.classList.add('rainbow-background');
});

wipImg.addEventListener('mouseleave', () => {
    body.classList.remove('rainbow-background');
});
