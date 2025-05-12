"use strict";

const container = document.querySelector("#container");
const settingsBtn = container.querySelector(".settings-btn");

function showMenu(menu) {
    menu.parentElement.classList.remove("hidden");

    menu.classList.remove("hidden");
}

function removeMenu(menu) {
    menu.style.transform = "translateY(5em) scaleX(0.75)";
    menu.style.opacity = "0";
    menu.parentElement.classList.add("hidden");

    setTimeout(() => {
        menu.parentElement.remove();
    }, 300);
}

function showElement(element) {
    // Set initial styles for transition
    element.style.transition = "transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease, max-width 0.3s ease";
    element.style.transform = "translateY(5em) scaleX(0.75)";
    element.style.opacity = "0";
    element.classList.remove("hidden");

    // Force reflow to apply initial styles before transitioning
    void element.offsetHeight;

    // Set final styles to trigger the transition
    element.style.transform = "translateY(0) scaleX(1)";
    element.style.opacity = "1";
}


function removeElement(element) {
    element.style.transition = "transform 0.3s ease, opacity 0.3s ease";
    element.style.transform = "translateY(5em) scaleX(0.75)";
    element.style.opacity = "0";

    setTimeout(() => {
        element.remove();
    }, 300);
}

function createElement(tag, classList = [], innerHTML = "", textContent = "", id = "") {
    const element = document.createElement(tag);
    if (classList.length) element.classList.add(...classList);
    if (innerHTML) element.innerHTML = innerHTML;
    if (textContent) element.textContent = textContent;
    if (id) element.id = id;
    return element;
}

function addCreateElementBtn() {
    // create element button
    const createUserElementBtn = createElement("button", ["create-element-btn", "icon-btn", "green"]);
    createUserElementBtn.appendChild(createElement("span", ["btn-text"], "", "create element"));
    createUserElementBtn.innerHTML += `<i class="fa-solid fa-plus fa-xl"></i>`;

    createUserElementBtn.addEventListener("click", () => {
        removeElement(createUserElementBtn);
        createUserElementMenu();
    });
    container.appendChild(createUserElementBtn); 
}

function createMenu(menuId, menuTitleContent, menuContent) {
    // menu container
    const menuContainer = createElement("div", ["menu-container", "hidden"]);
    menuContainer.addEventListener("click", (e) => {
        if (e.target === menuContainer) {
            if (menuId === "createUserElementMenu") {
                addCreateElementBtn();
            }
            removeMenu(menu);
        }
    })

    // menu
    const menu = createElement("div", ["menu", "hidden"])
    if (menuId) menu.id = menuId;

    // menu top
    const menuTop = createElement("div", ["menu-top", "header", "border-bottom"]);

    // menu title
    menuTop.appendChild(createElement("h1", [], menuTitleContent));

    // close menu button
    const closeBtn = createElement("button", ["icon-btn", "red"]);
    closeBtn.appendChild(createElement("span", ["btn-text"], "", "close"));
    closeBtn.innerHTML += `<i class="fa-solid fa-xmark fa-xl"></i>`;
    closeBtn.addEventListener("click", () => {
        if (menuId == "createUserElementMenu") {
            addCreateElementBtn();
        }
        removeMenu(menu);
    });
    menuTop.appendChild(closeBtn);

    menu.appendChild(menuTop);

    menu.appendChild(menuContent);

    // END
    menuContainer.appendChild(menu);
    container.appendChild(menuContainer);
    setTimeout(() => {
        showMenu(menu);
    }, 1);

    return menu;
}

function createUserElement(elementType, elementContent) {
    const userElementWrapper = createElement("div", ["user-element-wrapper", "header", "hidden"]);
    const userElement = document.createElement(elementType);
    userElementWrapper.appendChild(userElement);
    userElement.classList.add("user-element");
    userElement.textContent = elementContent;

    // delete button
    const deleteBtn = createElement("button", ["icon-btn", "red", "delete-btn", "hidden"]);
    deleteBtn.appendChild(createElement("span", ["btn-text", "delete-btn"], "", "delete"));
    deleteBtn.innerHTML += `<i class="fa-solid fa-trash-can fa-xl"></i>`;

    deleteBtn.addEventListener("click", () => {
        removeElement(userElementWrapper);
    });

    userElementWrapper.addEventListener("mouseenter", () => {
        userElementWrapper.appendChild(deleteBtn);
        showElement(deleteBtn);
    })

    userElementWrapper.addEventListener("mouseleave", () => {
        removeElement(deleteBtn);
    })

    container.appendChild(userElementWrapper);
    addCreateElementBtn();
    showElement(userElementWrapper);
}

function createUserElementMenu() {
    const createUserElementBtn = createElement("button", ["create-element-btn", "icon-btn", "green"]);
    createUserElementBtn.appendChild(createElement("span", ["btn-text"], "", "create element"));
    createUserElementBtn.innerHTML += `<i class="fa-solid fa-plus fa-xl"></i>`;

    // menu content
    const menuContent = createElement("div", ["menu-content-wrapper"]);

    // element form
    const createElementForm = createElement("form", ["create-element-form"]);

    // element type input
    const elementTypeInputWrapper = createElement("div", ["element-type-input-wrapper", "header"]);
    elementTypeInputWrapper.appendChild(createElement("label", ["element-type-input-label"], "", "Choose element type:"));
    elementTypeInputWrapper.querySelector(".element-type-input-label").setAttribute("for", "elementTypeInput");

    elementTypeInputWrapper.appendChild(createElement("select", ["element-type-input"], "", "", "elementTypeInput"));

    for (const element of ["h1", "h2", "h3", "p", "blockquote"]) {
        const option = createElement("option", [], "", element);
        option.value = element;

        elementTypeInputWrapper.querySelector("#elementTypeInput").appendChild(option);
    }

    createElementForm.appendChild(elementTypeInputWrapper);

    // element content input
    const elementContentInput = createElement("textarea", ["element-content-input"], "", "", "elementContentInput");
    elementContentInput.setAttribute("type", "text");
    createElementForm.appendChild(createElement("label", ["element-content-input-label"], "", "Enter element content:"));
    createElementForm.appendChild(elementContentInput);
    createElementForm.querySelector(".element-content-input-label").setAttribute("for", "elementContentInput");

    // menu bottom
    const menuBottom = createElement("div", ["menu-bottom", "header", "border-top"]);
    menuBottom.appendChild(createElement("div"));
    menuBottom.appendChild(createUserElementBtn);

    menuContent.appendChild(createElementForm);
    menuContent.appendChild(menuBottom);

    const menu = createMenu("createUserElementMenu", "Create new element", menuContent);
    setTimeout(() => elementContentInput.focus(), 100);


    createUserElementBtn.addEventListener("click", () => {
        if (!createElementForm.querySelector("#elementContentInput").value) {
            alert("element content can not be empty!");
            return;
        }
        removeMenu(menu);
        createUserElement(createElementForm.querySelector("#elementTypeInput").value, createElementForm.querySelector("#elementContentInput").value);
    })
}

const dummy = document.createElement("div");

settingsBtn.addEventListener("click", () => {
    createMenu("settingsMenu", "Settings", dummy);
})


window.addEventListener("load", () => addCreateElementBtn());