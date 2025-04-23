"use strict";

const container = document.getElementById("container");
const loaderContainer = document.querySelector(".loaderContainer");
const blocks = document.querySelectorAll(".block");
const appearElements =  document.querySelectorAll(".appear");
const totalNeededLoadtime = ((appearElements.length - 1) * 0.2 + 2) * 1000;
console.log(totalNeededLoadtime);

document.addEventListener("DOMContentLoaded", () => {
    appearElements.forEach((element, index) => {
        const delay = index * 0.2;

        setTimeout(() => {
            element.style.display = "flex";
            element.style.animationDelay = `${delay}s`;
            
            element.scrollIntoView({ behavior: "smooth", block: "end" });
        }, delay * 1000);
    });
});

function loader() {
    document.body.style.overflow = "hidden";
    loaderContainer.classList.remove("displayNone");  // removes display none
    requestAnimationFrame(() => { // magic code that prevents blur flicker caused by timing (gives time to render loaderContainer invisible first)
        loaderContainer.classList.remove("hidden")
    })

    setTimeout(() => {         
        loaderContainer.classList.add("hidden");

        setTimeout(() => {
            loaderContainer.classList.add("displayNone");
            
            window.scrollTo(0, 0);
            document.body.style.overflow = "auto";
        }, 300);
    }, totalNeededLoadtime); // this should be the length of the animation playing per block plus the longest animation delay
}

if (!sessionStorage.getItem("hasVisited")) {
    sessionStorage.setItem("hasVisited", "true");
    loader(); // your loader only on first page load of session
} else {
    // skip loader
    console.log("Already visited this session – skipping loader");
}
