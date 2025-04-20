const colors = [
    'var(--accent-color)',
    'var(--secondary-accent-color)',
    'var(--success-color)',
    'var(--error-text)',
    'var(--warning-color)'
];

const blocks = document.querySelectorAll('.block');

function changeColorOnHidden() {
const hiddenBlocks = Array.from(blocks).filter(block => {
    const style = getComputedStyle(block);
    return style.opacity === '0';
});

if (hiddenBlocks.length > 0) {
    const randomBlock = hiddenBlocks[Math.floor(Math.random() * hiddenBlocks.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    randomBlock.style.backgroundColor = randomColor;
}
}

// Run regularly (match your animation loop timing)
setInterval(changeColorOnHidden, 300); // adjust timing as needed

// Animate .item elements with staggered delay
function animateItems() {
const items = document.querySelectorAll('.item');

items.forEach((item, index) => {
    setTimeout(() => {
    item.classList.add('animate-in');
    }, index * 400); // 0.1s delay between each item
});
}

// Show the loader on page load
document.addEventListener("DOMContentLoaded", () => {
const loader = document.querySelector('.loader-container');

setTimeout(() => {
    loader.classList.add('hidden');

    // Start the .item animations after loader is hidden
    animateItems();
}, 2000); // Match loader display time
});
