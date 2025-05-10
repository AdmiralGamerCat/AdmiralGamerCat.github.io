"use strict";

function createConfirmationModal() {
    console.log("test")
}

createConfirmationModal()

const slider = document.querySelector(".theme-slider-container > .slider");

slider.addEventListener("click", () => {
    slider.style.left = "3.25em";
})