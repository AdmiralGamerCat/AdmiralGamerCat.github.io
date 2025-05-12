"use strict";

// save / load locally saved data functions
function loadItem(itemName) {
    return localStorage.getItem(itemName);
}

function saveItem(itemName, itemData) {
    return localStorage.setItem(itemName, itemData);
}

// variables
const container = document.querySelector("#container");
const settingsBtn = document.querySelector(".settings-btn");
// selected values
const selectedFont = loadItem("selectedFont");
const selectedBgColor = loadItem("selectedBgColor");
const selectedTextColor = loadItem("selectedTextColor");
const selectedFontSize = loadItem("selectedFontSize");
// default values
const defaultFont = "Arial, sans-serif";
const defaultBgColor = "#f5f5f5";
const defaultTextColor = "#1e3050";
const defaultFontSize = "14";

function updateSettings() {
    const font = loadItem("selectedFont");
    const bgColor = loadItem("selectedBgColor");
    const textColor = loadItem("selectedTextColor");
    const fontSize = loadItem("selectedFontSize");

    if (font) { // update font
        document.documentElement.style.setProperty("--selected-font", font);
    } else {
        document.documentElement.style.setProperty("--selected-font", defaultFont);
    }

    if (bgColor) { // update background color
        container.style.backgroundColor = bgColor;
    } else {
        container.style.backgroundColor = defaultBgColor;
    }

    if (textColor) { // update text color
        document.documentElement.style.setProperty("--selected-text-color", textColor);
    } else {
        document.documentElement.style.setProperty("--selected-text-color", defaultTextColor);
    }

    if (fontSize) { // update font size
        document.documentElement.style.setProperty("--selected-font-size", fontSize + "px");
    } else {
        document.documentElement.style.setProperty("--selected-font-size", defaultFontSize);
    }
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

    const menu = createElement("div", ["menu", menuType, "hidden"], "", "", menuId); // create menu

    // menu top
    const menuTop = createElement("div", ["menu-top", "header", "border-bottom"]);

    menuTop.appendChild(createElement("h1", [], "", menuTitleContent));

    // close button
    const closeBtn = createElement("button", ["close-btn", "icon-btn", "red"]);
    closeBtn.appendChild(createElement("span", ["btn-text"], "", "close"));
    closeBtn.innerHTML += `<i class="fa-solid fa-xmark fa-xl"></i>`;
    
    closeBtn.addEventListener("click", () => { // remove menu when clicking on close button
        if (menuId === "createNewElementMenu") { // if create new element menu is closed create a new create element button before removing menu
                addCreateElementBtn();
            }

        removeMenu(menu);
    })

    menuTop.appendChild(closeBtn); // add close button to menu top
    menu.appendChild(menuTop); // add menu top to menu
    menu.appendChild(menuContent); // add menu content to menu
    menuContainer.appendChild(menu); // adds menu to menu container
    container.appendChild(menuContainer); // adds full menu to document
    setTimeout(() => { // show menu
        showMenu(menu);
    }, 1);

    return menu;
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

    const menu = createMenu("createNewElementMenu", "Create new element", menuContent, "normal");
    setTimeout(() => contentInput.focus(), 100);

    createElementBtn.addEventListener("click", () => {
        const tag = form.querySelector("#tagSelect").value;
        const content = form.querySelector("#contentInput").value;

        if (!content) { // check for empty content
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
    const fontSelectWrapper = createElement("div", ["font-input-wrapper", "header"]);
    const fontSelect = createElement("select", ["font-select"], "", "", "fontSelect");
    const fontSelectLabel = createElement("label", ["font-select-label"], "", "Change font:");
    fontSelectLabel.setAttribute("for", "fontSelect");

    const fontOptions = [ // font options
        { name: "Arial (sans-serif)", value: "Arial, sans-serif" },
        { name: "Georgia (serif)", value: "Georgia, serif" },
        { name: "Courier New (monospace)", value: "'Courier New', monospace" },
        { name: "Comic Sans MS (cursive)", value: "'Comic Sans MS', cursive, sans-serif" },
        { name: "Times New Roman (serif)", value: "'Times New Roman', serif" },
        { name: "Verdana (sans-serif)", value: "Verdana, sans-serif" }
    ];

    fontOptions.forEach(fontOption => { // add font options to font select
        const option = createElement("option", [], "", fontOption.name);
        option.value = fontOption.value;
        fontSelect.appendChild(option);
    })

    fontSelect.value = loadItem("selectedFont"); // set font select value to selected font

    fontSelect.addEventListener("change", () => { // save selected font and update settings
        saveItem("selectedFont", fontSelect.value);
        updateSettings();
    })

    fontSelectWrapper.appendChild(fontSelectLabel); // add font select label to font select wrapper
    fontSelectWrapper.appendChild(fontSelect); // add font select to font select wrapper
    form.appendChild(fontSelectWrapper); // add font select wrapper to form

    // background color input
    const bgColorInputWrapper = createElement("div", ["bg-color-input-wrapper", "header"]);
    const bgColorInput = createElement("input", ["bg-color-input"], "", "", "bgColorInput");
    bgColorInput.setAttribute("type", "color");
    bgColorInput.value = loadItem("selectedBgColor");
    const bgColorInputLabel = createElement("label", ["bg-color-input-label"], "", "Change background color:");
    bgColorInputLabel.setAttribute("for", "bgColorInput");

    bgColorInput.addEventListener("change", () => { // save selected background color and update settings
        saveItem("selectedBgColor", bgColorInput.value);
        updateSettings();
    })

    bgColorInputWrapper.appendChild(bgColorInputLabel);
    bgColorInputWrapper.appendChild(bgColorInput);
    form.appendChild(bgColorInputWrapper);

    // text color input
    const textColorInputWrapper = createElement("div", ["text-color-input-wrapper", "header"]);
    const textColorInput = createElement("input", ["text-color-input"], "", "", "textColorInput");
    textColorInput.setAttribute("type", "color");
    textColorInput.value = loadItem("selectedTextColor");
    const textColorInputLabel = createElement("label", ["text-color-input-label"], "", "Change text color:");
    textColorInputLabel.setAttribute("for", "textColorInput");

    textColorInput.addEventListener("change", () => {
        saveItem("selectedTextColor", textColorInput.value);
        updateSettings();
    })

    textColorInputWrapper.appendChild(textColorInputLabel);
    textColorInputWrapper.appendChild(textColorInput);
    form.appendChild(textColorInputWrapper);

    // font size input
    const fontSizeInputWrapper = createElement("div", ["font-size-input-wrapper", "header"]);
    const fontSizeInput = createElement("input", ["font-size-input"], "", "", "fontSizeInput");
    fontSizeInput.setAttribute("type", "number");
    fontSizeInput.value = loadItem("selectedFontSize");
    fontSizeInput.setAttribute("min", "14");
    fontSizeInput.setAttribute("max", "24");
    const fontSizeInputLabel = createElement("label", ["font-size-input-label"], "", "Change font size:");
    fontSizeInputLabel.setAttribute("for", "fontSizeInput");

    fontSizeInput.addEventListener("change", () => {
        saveItem("selectedFontSize", fontSizeInput.value);
        console.log("saved new font size");
        updateSettings();
    })

    fontSizeInputWrapper.appendChild(fontSizeInputLabel);
    fontSizeInputWrapper.appendChild(fontSizeInput);
    form.appendChild(fontSizeInputWrapper);

    menuContent.appendChild(form); // add form to menu content

    // menu bottom
    const menuBottom = createElement("div", ["menu-bottom", "header", "border-top"]);
    menuBottom.appendChild(createElement("div"));

    // reset button
    const resetBtn = createElement("button", ["reset-btn", "icon-btn", "blue"]);
    resetBtn.appendChild(createElement("span", ["btn-text"], "", "reset to default"));
    resetBtn.innerHTML += `<i class="fa-solid fa-rotate-left fa-xl"></i>`;

    resetBtn.addEventListener("click", () => {
        saveItem("selectedFont", defaultFont);
        saveItem("selectedBgColor", defaultBgColor);
        saveItem("selectedTextColor", defaultTextColor);
        saveItem("selectedFontSize", defaultFontSize);

        fontSelect.value = defaultFont;
        bgColorInput.value = defaultBgColor;
        textColorInput.value = defaultTextColor;
        fontSizeInput.value = defaultFontSize;

        updateSettings();
    })

    menuBottom.appendChild(resetBtn); // add reset button to menu bottom
    menuContent.appendChild(menuBottom); // add menu bottom to menu content

    createMenu("settingsMenu", "Settings", menuContent, "normal");
}

settingsBtn.addEventListener("click", () => {
    settingsMenu();
})

window.addEventListener("load", () => { // on load add create new element button and change font
    // saveItem("selectedFont", defaultFont);
    // saveItem("selectedBgColor", defaultBgColor);
    // saveItem("selectedTextColor", defaultTextColor);
    // saveItem("selectedFontSize", defaultFontSize);
    
    updateSettings();
    addCreateElementBtn();
})