"use strict";

const container = document.querySelector("#container");
const items = container.querySelectorAll(".item");

for (const item of items) {
    item.addEventListener("mousemove", (e) => {
        const rect = item.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        item.style.setProperty("--mouse-x", `${x}%`);
        item.style.setProperty("--mouse-y", `${y}%`);
    })
}