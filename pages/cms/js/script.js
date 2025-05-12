"use strict";

const container = document.querySelector("#container");
const settingsBtn = document.querySelector(".settings-btn")

function createElement(tag, classList=[], innerHTML="", textContent="", id="") {
    if (!tag) {
        console.log("failed to create element, missing tag.");
        return
    }

    const element = document.createElement(tag);

    if (classList) {
        element.classList.add(...classList);
    }

    if (innerHTML) {
        element.innerHTML = innerHTML;
    }

    if (textContent) {
        element.textContent = textContent;
    }

    if (id) {
        element.id = id;
    }

    return element;
}

// font
function changeFont(font) {
    document.documentElement.style.setProperty("--selected-font", font);
}

function saveFont(font) {
    localStorage.setItem("selectedFont", font);
}

const selectedFont = localStorage.getItem("selectedFont");
if (selectedFont) {
    changeFont(selectedFont);
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

// show / remove menu functions
function showMenu(menu) {
    menu.parentElement.classList.remove("hidden");
    menu.classList.remove("hidden");
}

function removeMenu(menu) {
    menu.style.transform = "translateY(5em) scaleX(0.75)";
    menu.style.opacity = "0";
    menu.parentElement.style.opacity = "0";

    setTimeout(() => {
        menu.parentElement.remove();
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

function createMenu(menuId, menuTitleContent, menuContent, menuType) {
    const menuContainer = createElement("div", ["menu-container", "hidden"]);
    
    menuContainer.addEventListener("click", (e) => { // remove menu when clicking outside menu
        if (e.target === menuContainer) {
            if (menuId === "createNewElementMenu") {
                addCreateElementBtn();
            }

            removeMenu(menu);
        }
    })

    const menu = createElement("div", ["menu", menuType, "hidden"], "", "", menuId);

    // menu top
    const menuTop = createElement("div", ["menu-top", "header", "border-bottom"]);

    menuTop.appendChild(createElement("h1", [], "", menuTitleContent));

    // close button
    const closeBtn = createElement("button", ["close-btn", "icon-btn", "red"]);
    closeBtn.appendChild(createElement("span", ["btn-text"], "", "close"));
    closeBtn.innerHTML += `<i class="fa-solid fa-xmark fa-xl"></i>`;
    
    closeBtn.addEventListener("click", () => { // remove menu when clicking on close button
        if (menuId === "createNewElementMenu") {
                addCreateElementBtn();
            }

        removeMenu(menu);
    })

    menuTop.appendChild(closeBtn);
    menu.appendChild(menuTop);

    // menu content
    menu.appendChild(menuContent);

    menuContainer.appendChild(menu);
    container.appendChild(menuContainer);
    setTimeout(() => {
        showMenu(menu);
    }, 1);

    return menu;
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
    userElementContainer.addEventListener("mouseenter", () => {
        userElementContainer.appendChild(deleteBtn);
        showElement(userElementContainer.querySelector(".delete-btn"));
    })

    userElementContainer.addEventListener("mouseleave", () => {
        const deleteBtn = userElementContainer.querySelector(".delete-btn");
        
        if (deleteBtn) {
            removeElement(deleteBtn);
        }
    })

    container.appendChild(userElementContainer);
    showElement(userElementContainer);
}

function createNewElementMenu() {
    const menuContent = createElement("div", ["menu-content-wrapper"])
    const form = createElement("form", ["menu-form"]);

    // element tag input
    const selectWrapper = createElement("div", ["tag-select-wrapper", "header"]);
    const tagSelect = createElement("select", ["tag-select"], "", "", "tagSelect");

    const tagOptions = [
        { name: "Heading 1", value: "h1" },
        { name: "Heading 2", value: "h2" },
        { name: "Heading 3", value: "h3" },
        { name: "Paragraph", value: "p" },
        { name: "Blockquote", value: "blockquote" }
    ];

    tagOptions.forEach(tagOption => {
        const option = createElement("option");
        option.textContent = tagOption.name;
        option.value = tagOption.value;

        tagSelect.appendChild(option);
    })

    selectWrapper.appendChild(createElement("label", ["tag-select-label"], "", "Select element type:"));
    selectWrapper.appendChild(tagSelect);
    selectWrapper.querySelector(".tag-select-label").setAttribute("for", "tagSelect");
    form.appendChild(selectWrapper);

    // element content input
    const contentInput = createElement("textarea", ["content-input"], "", "", "contentInput");
    const contentInputLabel = createElement("label", ["content-input-label"], "", "Enter element content:");
    form.appendChild(contentInputLabel);
    form.querySelector(".content-input-label").setAttribute("for", "contentInput");
    form.appendChild(contentInput);

    // menu bottom
    const menuBottom = createElement("div", ["menu-bottom", "header", "border-top"]);
    menuBottom.appendChild(createElement("div"));

    // create element button
    const createElementBtn = createElement("button", ["create-element-btn", "icon-btn", "green"]);
    createElementBtn.appendChild(createElement("span", ["btn-text"], "", "create element"));
    createElementBtn.innerHTML += `<i class="fa-solid fa-plus fa-xl"></i>`;

    const menu = createMenu("createNewElementMenu", "Create new element", menuContent, "normal");;
    setTimeout(() => contentInput.focus(), 100);

    createElementBtn.addEventListener("click", () => {
        const tag = form.querySelector("#tagSelect").value;
        const content = form.querySelector("#contentInput").value;

        if (!content) {
            alert("Content can not be empty!");
            return;
        }

        removeMenu(menu);
        createUserElement(tag, content);
        addCreateElementBtn();
    })

    menuContent.appendChild(form);
    menuBottom.appendChild(createElementBtn);
    menuContent.appendChild(menuBottom);
}

function settingsMenu() {
    const menuContent = createElement("div", ["menu-content-wrapper"]);
    const form = createElement("form", ["menu-form"]);

    // font select
    const fontSelectWrapper = createElement("div", ["font-select-wrapper", "header"]);
    fontSelectWrapper.appendChild(createElement("label", ["font-select-label"], "", "Select font:"));
    const fontSelect = createElement("select", ["font-select"], "", "", "fontSelect");
    fontSelectWrapper.querySelector(".font-select-label").setAttribute("for", "fontSelect");

    const fontOptions = [ // font options
        { name: "Arial (sans-serif)", value: "Arial, sans-serif" },
        { name: "Georgia (serif)", value: "Georgia, serif" },
        { name: "Courier New (monospace)", value: "'Courier New', monospace" },
        { name: "Comic Sans MS (cursive)", value: "'Comic Sans MS', cursive, sans-serif" },
        { name: "Times New Roman (serif)", value: "'Times New Roman', serif" },
        { name: "Verdana (sans-serif)", value: "Verdana, sans-serif" }
    ];

    fontOptions.forEach(fontOption => { // add font options
        const option = createElement("option");
        option.textContent = fontOption.name;
        option.value = fontOption.value;

        fontSelect.appendChild(option);
    })

    if (saveFont) {
        fontSelect.value = selectedFont;
    }

    fontSelect.addEventListener("change", () => {
        changeFont(fontSelect.value);
        saveFont(fontSelect.value);

        const formElements = document.querySelectorAll("button, input, select, textarea");
        formElements.forEach(element => {
            element.style.fontFamily = fontSelect.value;
        });
    })

    fontSelectWrapper.appendChild(fontSelect);

    form.appendChild(fontSelectWrapper);

    menuContent.appendChild(form);





    const menu = createMenu("settingsMenu", "Settings", menuContent, "normal"); // create menu
}

settingsBtn.addEventListener("click", () => {
    settingsMenu();
})

window.addEventListener("load", () => { // on load add create new element button
    addCreateElementBtn();
})