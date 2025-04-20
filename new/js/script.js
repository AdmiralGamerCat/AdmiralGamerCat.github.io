"use strict";

const loaderContainer = document.querySelector(".loader-container");
const blocks = document.querySelectorAll(".block");
const appearElements = document.querySelectorAll(".appear");
let longestAnimationDelay = 1300;
let animationLoopCount = 1;

document.addEventListener("DOMContentLoaded", () => { // adds delay to every appear item so they appear one after the other
    appearElements.forEach((element, index) => {
        const delay = index * 0.3;
        element.style.animationDelay = `${delay}s`;
    })
})

document.addEventListener("DOMContentLoaded", () => { // on page load start loading
    console.log("page load started.")
    loader()
})

function loader() {
    document.body.style.overflowY = "hidden"; // removes scrollbar
    loaderContainer.classList.remove("hidden"); // shows loaderContainer

    blocks.forEach(block => { // sets the amount of loops
        block.style.animationIterationCount = animationLoopCount;
    })

    const totalDuration = longestAnimationDelay + (2000 * animationLoopCount); // calculates the total load time

    if (totalDuration < (appearElements.length * .3 * 1000)) { // checks if there's enough time to load all appearing elements
        console.log(`Needed load time = ${(appearElements.length * .3 * 1000)}ms.`)
        console.log(`Current load time = ${totalDuration}ms`)
        console.log("Adding load time");
        animationLoopCount++;
        loader();
        return;
    } else { // if there is, stops loading
        console.log("Enough load time added to load all appearing elements.")
        setTimeout(() => {
            loaderContainer.classList.add("hidden");
            document.body.style.overflowY = "auto";
            window.scrollTo(0, 0);
        }, totalDuration);
    }
}