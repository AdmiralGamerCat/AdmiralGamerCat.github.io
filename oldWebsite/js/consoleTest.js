"use strict";

const consoleElement = document.getElementById("console");
const consoleInner = document.getElementById("consoleInner");
const scanBtn = document.getElementById("scanBtn");
const consoleCloseBtn = document.getElementById("consoleCloseBtn");
let loopCount = 0;
const MsgCount = 21;
const MsgDelay = 100;
let consoleOpen = false;

    function generateConsoleLine() {
        let ranNum1 = Math.round(Math.random() * 5);
        let ranNum2 = Math.round(Math.random() * 5);
        let ranNum3 = Math.round(Math.random() * 10);
        let ranNum4 = Math.round(Math.random() * 5);

        let consoleLine = "";

        switch (ranNum1) {
            case 0: consoleLine = "/ESTABLISHING CONNECTION "; break;
            case 1: consoleLine = "/RECONNECTING "; break;
            case 2: consoleLine = "/SEARCHING "; break;
            case 3: consoleLine = "/REQUESTING "; break;
            case 4: consoleLine = "/CONNECTING "; break;
            case 5: consoleLine = "/OPENING "; break;
        }

        switch (ranNum2) {
            case 0: consoleLine += "LOCAL "; break;
            case 1: consoleLine += "REMOTE "; break;
            case 2: consoleLine += "SERVER "; break;
            case 3: consoleLine += "SHIP "; break;
            case 4: consoleLine += "RUNNER "; break;
            case 5: consoleLine += "CORP "; break;
        }

        switch (ranNum3) {
            case 0: consoleLine += "DATA "; break;
            case 1: consoleLine += "LOCATION "; break;
            case 2: consoleLine += "SECURITY "; break;
            case 3: consoleLine += "LEVEL "; break;
            case 4: consoleLine += "ACCESS "; break;
            case 5: consoleLine += "PERM "; break;
            case 6: consoleLine += "SAFETY "; break;
            case 7: consoleLine += "BACKUP "; break;
            case 8: consoleLine += "VERIFICATION "; break;
            case 9: consoleLine += "PORT "; break;
            case 10: consoleLine += "SUBLEVEL "; break;
        }

        switch (ranNum4) {
            case 0: consoleLine += "X"; break;
            case 1: consoleLine += "O"; break;
            case 2: consoleLine += "/"; break;
        }

        return consoleLine;
    }

async function printConsoleLines() {
    openConsole()
    consoleOpen = true;
    loopCount = 0;
    scanBtn.removeEventListener("click", printConsoleLines); // disable scan button
    scanBtn.classList.add("scanning");
    scanBtn.textContent = "SCANNING";


    while (loopCount < MsgCount) {
        if (!consoleOpen) { // prevent printing when console gets closed
            break;
        }
        consoleInner.innerHTML += `<p>${generateConsoleLine()}</p>`;
        consoleInner.scrollTop = consoleInner.scrollHeight;
        loopCount++;
        await new Promise(resolve => setTimeout(resolve, MsgDelay));
    }

    // Final success or fail message
    const finalMsg = Math.round(Math.random()) === 1
        ? `<p class="succes"># CONNECTION HAS BEEN SUCCESSFUL</p>`
        : `<p class="fail"># CONNECTION HAS FAILED</p>`;
    
    consoleInner.innerHTML += (consoleOpen ? finalMsg : "");
    consoleInner.scrollTop = consoleInner.scrollHeight;
    scanBtn.addEventListener("click", printConsoleLines); // re-enable scan button
    scanBtn.classList.remove("scanning");
    scanBtn.textContent = "SCAN";

}

function closeConsole() {
    consoleInner.innerHTML += `<p class = "warning"># CONSOLE CLOSED</p>`;
    consoleElement.style.display = "none";
    consoleOpen = false
}

function openConsole() {
    consoleElement.style.display = "flex";
}

scanBtn.addEventListener("click", printConsoleLines);
consoleCloseBtn.addEventListener("click", closeConsole);