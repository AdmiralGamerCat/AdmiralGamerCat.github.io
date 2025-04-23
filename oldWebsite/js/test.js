"use strict";

// html to js linking
const scanButton = document.querySelector("#scan-button");
const scanButtonActive = document.querySelector("#scan-button-placeholder");
const consoleClose = document.querySelector("#console-close-button");

const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
const p4 = document.querySelector("#p4");
const p5 = document.querySelector("#p5");

// var
let d = 0;
let i = 0;
let x = 0;
let z = 0;
let keepGoing = true;
let keepGoingConsole = true;
let firstCallScan = true;
let firstCallConsole = true;

// functions
function myTimer() {
    if (keepGoing === true) {
        // console.log(d, i, x);
        switch (d){
            case 0:case 1:case 2:case 3:case 4: p3.innerHTML = "O"; break;
            case 5:case 6:case 7:case 8:case 9: p3.innerHTML = "X"; break;
        }
        switch (i) {
            case 0: 
                p5.innerHTML = "&nbsp\\";
                break;
            case 1: 
                p5.innerHTML = "&nbsp&nbsp&nbsp\\";
                p4.innerHTML = "&nbsp\\";
                break;
            case 2: 
                p5.innerHTML = "&nbsp&nbsp&nbsp&nbsp\\";
                p4.innerHTML = "&nbsp&nbsp\\";
                break;
            case 3: 
                p5.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp\\";
                p4.innerHTML = "&nbsp&nbsp&nbsp\\";
                p3.innerHTML = "&nbsp" + p3.innerHTML;
                break;
            case 4: 
                p5.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p4.innerHTML = "&nbsp&nbsp&nbsp&nbsp\\";
                p3.innerHTML = "&nbsp&nbsp" + p3.innerHTML;
                p2.innerHTML = "&nbsp\\";
                break;
            case 5: 
                p5.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p4.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p3.innerHTML = "&nbsp&nbsp&nbsp&nbsp" + p3.innerHTML;
                p2.innerHTML = "&nbsp&nbsp&nbsp\\";
                p1.innerHTML = "&nbsp\\";
                break;
            case 6: 
                p5.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p4.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p3.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp" + p3.innerHTML;
                p2.innerHTML = "&nbsp&nbsp&nbsp&nbsp\\";
                p1.innerHTML = "&nbsp&nbsp\\";
                break;
            case 7: 
                p5.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p4.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p3.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp" + p3.innerHTML;
                p2.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p1.innerHTML = "&nbsp&nbsp&nbsp&nbsp\\";
                break;
            case 8: 
                p5.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p4.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p3.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp" + p3.innerHTML;
                p2.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p1.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                break;
            case 9:
                p5.innerHTML = "&nbsp&nbsp&nbsp&nbsp/";
                p4.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p3.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp" + p3.innerHTML;
                p2.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p1.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                break;
            case 10:
                p5.innerHTML = "&nbsp&nbsp/";
                p4.innerHTML = "&nbsp&nbsp&nbsp&nbsp/";
                p3.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp" + p3.innerHTML;
                p2.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p1.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                break;
            case 11: 
                p5.innerHTML = "&nbsp/";
                p4.innerHTML = "&nbsp&nbsp&nbsp/";
                p3.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp" + p3.innerHTML;
                p2.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p1.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                break;
            case 12: 
                p5.innerHTML = "/&nbsp";
                p4.innerHTML = "&nbsp/";
                p3.innerHTML = "&nbsp&nbsp&nbsp" + p3.innerHTML;
                p2.innerHTML = "&nbsp&nbsp&nbsp&nbsp/";
                p1.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                break;
            case 13: 
                p5.innerHTML = "/&nbsp&nbsp";
                p4.innerHTML = "/";
                p3.innerHTML = "&nbsp&nbsp" + p3.innerHTML;
                p2.innerHTML = "&nbsp&nbsp&nbsp/";
                p1.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                break;
            case 14: 
                p5.innerHTML = "/&nbsp&nbsp&nbsp";
                p4.innerHTML = "/&nbsp";
                p3.innerHTML = "&nbsp" + p3.innerHTML;
                p2.innerHTML = "&nbsp&nbsp/";
                p1.innerHTML = "&nbsp&nbsp&nbsp&nbsp/";
                break;
            case 15:
                p5.innerHTML = "/&nbsp&nbsp&nbsp&nbsp";
                p4.innerHTML = "/&nbsp&nbsp";
                p3.innerHTML = p3.innerHTML;
                p2.innerHTML = "&nbsp/";
                p1.innerHTML = "&nbsp&nbsp&nbsp/";
                break;
            case 16:
                p5.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p4.innerHTML = "/&nbsp&nbsp&nbsp&nbsp";
                p3.innerHTML = p3.innerHTML + "&nbsp&nbsp&nbsp";
                p2.innerHTML = "/&nbsp";
                p1.innerHTML = "&nbsp&nbsp/";
                break;
            case 17:
                p5.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p4.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p3.innerHTML = p3.innerHTML + "&nbsp&nbsp&nbsp&nbsp&nbsp";
                p2.innerHTML = "/&nbsp&nbsp&nbsp";
                p1.innerHTML = "&nbsp/";
                break;
            case 18:
                p5.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p4.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p3.innerHTML = p3.innerHTML + "&nbsp&nbsp&nbsp&nbsp&nbsp";
                p2.innerHTML = "/&nbsp&nbsp&nbsp&nbsp";
                p1.innerHTML = "/&nbsp&nbsp&nbsp";
                break;
            case 19: 
                p5.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p4.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p3.innerHTML = p3.innerHTML + "&nbsp&nbsp&nbsp&nbsp&nbsp";
                p2.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p1.innerHTML = "/&nbsp&nbsp&nbsp&nbsp";
                break;
            case 20: 
                p5.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p4.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p3.innerHTML = p3.innerHTML + "&nbsp&nbsp&nbsp&nbsp&nbsp";
                p2.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p1.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                break;
            case 21:
                p5.innerHTML = "\\&nbsp&nbsp&nbsp&nbsp";
                p4.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p3.innerHTML = p3.innerHTML + "&nbsp&nbsp&nbsp&nbsp&nbsp";
                p2.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p1.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                break;
            case 22:
                p5.innerHTML = "\\&nbsp&nbsp";
                p4.innerHTML = "\\&nbsp&nbsp&nbsp&nbsp";
                p3.innerHTML = p3.innerHTML + "&nbsp&nbsp&nbsp&nbsp&nbsp";
                p2.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p1.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                break;
            case 23:
                p5.innerHTML = "\\&nbsp";
                p4.innerHTML = "\\&nbsp&nbsp&nbsp";
                p3.innerHTML = p3.innerHTML + "&nbsp&nbsp&nbsp&nbsp";
                p2.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p1.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                break;
            case 24:
                p5.innerHTML = "|";
                p4.innerHTML = "\\&nbsp";
                p3.innerHTML = p3.innerHTML + "&nbsp&nbsp&nbsp";
                p2.innerHTML = "\\&nbsp&nbsp&nbsp&nbsp";
                p1.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                break;
            case 25:
                p5.innerHTML = "|";
                p4.innerHTML = "|";
                p3.innerHTML = p3.innerHTML + "&nbsp";
                p2.innerHTML = "\\&nbsp&nbsp&nbsp";
                p1.innerHTML = "\\&nbsp&nbsp&nbsp&nbsp&nbsp";
                break;
            case 26:
                p5.innerHTML = "|";
                p4.innerHTML = "|";
                p3.innerHTML = p3.innerHTML;
                p2.innerHTML = "\\&nbsp&nbsp";
                p1.innerHTML = "\\&nbsp&nbsp&nbsp&nbsp";
                break;
            case 27:
                p5.innerHTML = "|";
                p4.innerHTML = "|";
                p3.innerHTML = p3.innerHTML;
                p2.innerHTML = "\\&nbsp";
                p1.innerHTML = "\\&nbsp&nbsp&nbsp";
                break;
            case 28:
                p5.innerHTML = "|";
                p4.innerHTML = "|";
                p3.innerHTML = p3.innerHTML;
                p2.innerHTML = "|";
                p1.innerHTML = "\\&nbsp";
                break;
            case 29:
                p5.innerHTML = "|";
                p4.innerHTML = "|";
                p3.innerHTML = p3.innerHTML;
                p2.innerHTML = "|";
                p1.innerHTML = "|";
                break;
        }
        d++; i++; x++;
        if (d === 10) {
            d = 0;
        }
        if (i === 30) {
            i = 0;
        }
        if (x === 90) {
            z = 10;
            let ranNum = Math.random();
            console.log(ranNum);
            let connectStatus = "#CONNECTION HAS ";
            if (ranNum > .5) {
                connectStatus += "BEEN SUCCESFUL";
            } else if (ranNum < .5) {
                connectStatus += "FAILED";
            }
            document.querySelector("#con-p-0").innerHTML = document.querySelector("#con-p-1").innerHTML;
            document.querySelector("#con-p-1").innerHTML = document.querySelector("#con-p-2").innerHTML;
            document.querySelector("#con-p-2").innerHTML = document.querySelector("#con-p-3").innerHTML;
            document.querySelector("#con-p-3").innerHTML = document.querySelector("#con-p-4").innerHTML;
            document.querySelector("#con-p-4").innerHTML = connectStatus;
            keepGoing = false;
            x = 0;
        }
    } else {
        x = 0;
        scanButtonActive.style.display = "none";
        scanButton.style.display = "inline-block";
        return;
    }
}
function randomLine(z, b) {
    let ranNum1 = Math.round((Math.random() * 5));
    let ranNum2 = Math.round((Math.random() * 5));
    let ranNum3 = Math.round((Math.random() * 10));
    let ranNum4 = Math.round((Math.random() * 2));
    let consoleLine = "";
    switch(ranNum1) {
        case 0:
            consoleLine = "/ESTABLISHING CONNECTION ";
            break;
        case 1:
            consoleLine = "/RECONNECTING ";
            break;
        case 2:
            consoleLine = "/SEARCHING ";
            break;
        case 3:
            consoleLine = "/REQUESTING ";
            break;
        case 4:
            consoleLine = "/CONNECTING ";
            break;
        case 5:
            consoleLine = "/OPENING ";
            break;
    }
    switch(ranNum2) {
        case 0:
            consoleLine += "LOCAL ";
            break;
        case 1:
            consoleLine += "REMOTE ";
            break;
        case 2:
            consoleLine += "SERVER ";
            break;
        case 3:
            consoleLine += "SHIP ";
            break;
        case 4:
            consoleLine += "RUNNER ";
            break;
        case 5:
            consoleLine += "CORP ";
            break;
    }
    switch(ranNum3) {
        case 0:
            consoleLine += "DATA ";
            break;
        case 1:
            consoleLine += "LOCATION ";
            break;
        case 2:
            consoleLine += "SECURITY ";
            break;
        case 3:
            consoleLine += "LEVEL ";
            break;
        case 4:
            consoleLine += "ACCESS ";
            break;
        case 5:
            consoleLine += "PERM ";
            break;
        case 6:
            consoleLine += "SAFETY ";
            break;
        case 7:
            consoleLine += "BACKUP ";
            break;
        case 8:
            consoleLine += "VERIFICATION ";
            break;
        case 9:
            consoleLine += "PORT ";
            break;
        case 10:
            consoleLine += "SUBLEVEL ";
            break;
    }
    switch(ranNum4) {
        case 0:
            consoleLine += "X";
            break;
        case 1: 
            consoleLine += "O";
            break;
        case 2:
            consoleLine += "/";
            break;
    }
    if (b === true) {
        document.querySelector("#console-bottom").innerHTML += `<p id="con-p-${z}">${consoleLine}</p>`;
    } else if (b === false) {
        return consoleLine;
    }
}
function moveLineUp() {
    document.querySelector("#con-p-0").innerHTML = document.querySelector("#con-p-1").innerHTML;
    document.querySelector("#con-p-1").innerHTML = document.querySelector("#con-p-2").innerHTML;
    document.querySelector("#con-p-2").innerHTML = document.querySelector("#con-p-3").innerHTML;
    document.querySelector("#con-p-3").innerHTML = document.querySelector("#con-p-4").innerHTML;
}
function consoleFunction() {
    if (firstCallConsole === true) {
        document.querySelector("#console-section").style.display = "flex";
        firstCallConsole = false;
    } else if (firstCallConsole === false) {
        if (keepGoingConsole === true) {
            if (z < 10) {

                switch (z) {
                    case 0: case 1: case 2: case 3: case 4:
                        randomLine(z, true);
                        z++;
                        break;
                    case 5:
                        moveLineUp();
                        document.querySelector("#con-p-4").innerHTML = randomLine(z, false)
                        z = 5;
                        break;
                }
            } else {
                keepGoingConsole = false;
                console.log("console done");
            }
        }
    }
}
function scanFunction() {
    setTimeout(consoleFunction, 3000);
    setInterval(consoleFunction, 100);
    if (keepGoing === false) {
        x = 0;
        keepGoing = true;
    }
    if (firstCallScan === true) {
        setInterval(myTimer,50);
        firstCallScan = false;
    }
    myTimer();
    scanButton.style.display = "none";
    scanButtonActive.style.display = "flex";
}
function closeConsole() {
    document.querySelector("#console-section").style.display = "none";
}

// listeners
scanButton.addEventListener("click", scanFunction);
consoleClose.addEventListener("click", closeConsole);