"use strict";

let projects = [
    {
        title: "UOMO webshop",
        description: `A responsive, multi-page webshop created for a fictional pharmaceutical brand called <strong>UOMO</strong>. Designed to replicate the layout from <a href="https://www.figma.com/file/FVOwEQHZ5ZicBrhSRAlRnv?type=design&mode=design" target="_blank" rel="noopener noreferrer">this Figma design</a>, it was developed as the final project for the CSS course at <a href="https://codecrashers.nl" target="_blank" rel="noopener noreferrer">CodeCrashers</a>. The site features a homepage, blog, product listings, contact page, and more—highlighting both structural layout and custom styling.`,
        thumbnails: [
            "../images/projects/uomo-webshop/home-page.png",
            "../images/projects/uomo-webshop/contact-page.png",
            "../images/projects/uomo-webshop/blog-page.png",
            "../images/projects/uomo-webshop/shop-page.png",
            "../images/projects/uomo-webshop/about-page.png"
        ]
    },
];

let leftRightNum = 0;

function createProject(project) {
    // creates project container
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("projectContainer", "appear");

    // creates project info container
    const projectInfo = document.createElement("div");
    projectInfo.classList.add("projectInfo");
    // projectContainer.appendChild(projectInfo); !!!!

    // creates project title
    const projectTitle = document.createElement("h2");
    projectTitle.textContent = project.title;
    projectInfo.appendChild(projectTitle);

    // creates project description
    const projectDescription = document.createElement("p");
    projectDescription.innerHTML = project.description;
    projectInfo.appendChild(projectDescription);

    // creates slider container
    const sliderContainer = document.createElement("div");
    sliderContainer.classList.add("sliderContainer");
    // projectContainer.appendChild(sliderContainer); !!!!

    if (leftRightNum === 0) {
        // order of project info and slider
        projectContainer.appendChild(projectInfo);
        projectContainer.appendChild(sliderContainer);

        // order of title color
        projectTitle.style.color = "var(--accent-color)";

        leftRightNum = 1
    } else if (leftRightNum === 1) {
        // order of project info and slider
        projectContainer.appendChild(sliderContainer);
        projectContainer.appendChild(projectInfo);

        // order of title color
        projectTitle.style.color = "var(--secondary-accent-color)";

        leftRightNum = 0
    }

    // creates slider
    const slider = document.createElement("div");
    slider.classList.add("slider");
    sliderContainer.appendChild(slider);

    // adds images to slider
    project.thumbnails.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = project.title;
        slider.appendChild(img);
    })

    // creates dots container
    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("dotsContainer");
    sliderContainer.appendChild(dotsContainer);

    // adds dots to dots container
    project.thumbnails.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);
    });

    document.querySelector(".projectsContainer").appendChild(projectContainer); // adds created project container to html


    let currentIndex = 0;
    const images = slider.querySelectorAll("img");
    const dots = dotsContainer.querySelectorAll(".dot");

    const updateSlider = () => {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`; // assumes each image is 100% width
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentIndex);
        });
    };

    // clickable dots
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            currentIndex = i;
            updateSlider();
            resetAutoSlide();
        })
    })

    // auto slide
    let autoInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    }, 4000);

    const resetAutoSlide = () => {
        clearInterval(autoInterval);
        autoInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            updateSlider();
        }, 4000);
    };
}

projects.forEach(createProject);


document.addEventListener("DOMContentLoaded", () => {
    const appearElements =  document.querySelectorAll(".appear");
    appearElements.forEach((element, index) => {
        const delay = index * 0.2;

        setTimeout(() => {
            element.style.display = "flex";
            element.style.animationDelay = `${delay}s`;
            
            element.scrollIntoView({ behavior: "smooth", block: "end" });
        }, delay * 1000);
    });
});