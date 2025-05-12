"use strict";

function createElement(tag, classList=[], innerHTML="", textContent="", id="") {
    if (!tag) { // if no tag is given, return log error and return
        console.log("failed to create element, missing tag.");
        return;
    }

    const element = document.createElement(tag); // creates element

    if (classList) { // if class(es) are given add them to element
        element.classList.add(...classList);
    }

    if (innerHTML) { // if innerHTML is given add it to element
        element.innerHTML = innerHTML;
    }

    if (textContent) { // if textContent is given add to element
        element.textContent = textContent;
    }

    if (id) { // if id is gived add to element
        element.id = id;
    }

    return element; // return created element
}

function createUserElement(tag, content) {
    // user element container
    const userElementContainer = createElement("div", ["user-element-container", "header", "hidden"]);
    userElementContainer.appendChild(createElement(tag, ["userElement"], "", content));

    // delete button
    const deleteBtn = createElement("button", ["delete-btn", "icon-btn", "red"]);
    deleteBtn.appendChild(createElement("span", ["btn-text"], "", "delete"));
    deleteBtn.innerHTML += `<i class="fa-solid fa-trash-can fa-xl"></i>`;
    deleteBtn.addEventListener("click", () => {
        removeElement(userElementContainer);
    })

    // add / remove delete button
    userElementContainer.addEventListener("mouseenter", () => { // add delete button on hover
        userElementContainer.appendChild(deleteBtn);
        showElement(userElementContainer.querySelector(".delete-btn"));
    })

    userElementContainer.addEventListener("mouseleave", () => { // remove delete button when not hovering
        const deleteBtn = userElementContainer.querySelector(".delete-btn");
        
        if (deleteBtn) {
            removeElement(deleteBtn);
        }
    })

    container.appendChild(userElementContainer); // add user element to document
    showElement(userElementContainer); // show user element
}

// show / remove element functions
function showElement(element) {
    setTimeout(() => {
        element.classList.remove("hidden");
    }, 1);
}

function removeElement(element) {
    element.classList.add("hidden");

    setTimeout(() => {
        element.remove();
    }, 300);
}

function addCreateElementBtn() {
    const createNewElementBtn = createElement("button", ["create-new-user-element-btn", "icon-btn", "green"]);
    createNewElementBtn.appendChild(createElement("span", ["btn-text"], "", "create new element"));
    createNewElementBtn.innerHTML += `<i class="fa-solid fa-plus fa-xl"></i>`;

    createNewElementBtn.addEventListener("click", () => {
        removeElement(createNewElementBtn);
        createNewElementMenu();
    })

    container.appendChild(createNewElementBtn);
}