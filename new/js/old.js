"use strict";

const container = document.getElementById("container");
const loaderContainer = document.querySelector(".loader-container");
const blocks = document.querySelectorAll(".block");
let animationLoopCount = 2;
let longestAnimationDelay = 1300;
let appearAnimationDelay = 200;


document.addEventListener("DOMContentLoaded", () => {
    document.body.style.overflow = "hidden";
    loaderContainer.classList.remove("hidden");

    blocks.forEach(block => {
        block.style.animationIterationCount = animationLoopCount;
    })

    const totalDuration = longestAnimationDelay + (2000 * animationLoopCount);

    setTimeout(() => {
        loaderContainer.classList.add("hidden");
        document.body.style.overflow = "auto";
    }, totalDuration);
})

const appearItems = document.querySelectorAll(".appear");

document.addEventListener("DOMContentLoaded", () => {
    const appearElements = document.querySelectorAll('.appear');

    appearElements.forEach((element, index) => {
        const delay = index * 0.3;
        element.style.animationDelay = `${delay}s`;
        window.scrollTo(0, 0);
    });
});
