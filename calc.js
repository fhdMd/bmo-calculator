// console.log("I love you football");
const display = document.getElementById("display");

// function check() {
//   if (display.value.length === 7) {
//     let textSize = parseInt(window.getComputedStyle(display).fontSize);
//     display.style.fontSize = textSize - 25 + "px";
//   }
// }

function appendToDisplay(input) {
  if (isBlank) {
  } else {
    display.style.backgroundImage = "none";
  }
  display.value += input;
  // check();
}

function clearAll() {
  display.value = "";
  setBackground();
  isBlank = false;
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
  if (display.value == "") {
    display.style.backgroundImage = "url(baby-bmo.png)";
    display.style.backgroundSize = "cover";
    display.style.backgroundPosition = "center";
  }
}

function setBackground() {
  display.style.backgroundImage = "url(baby-bmo.png)";
  display.style.backgroundSize = "cover";
  display.style.backgroundPosition = "center";
}

function removeBackground() {
  display.style.backgroundImage = "none";
}

let isBlank = false;

function mode() {
  if (isBlank && display.value == "") {
    setBackground();
    isBlank = false;
  } else {
    removeBackground();
    isBlank = true;
  }
}

function solve() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
