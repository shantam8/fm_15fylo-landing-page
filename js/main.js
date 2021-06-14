let topInput = document.querySelector("#topInputMail");
let bottomInput = document.querySelector("#bottomInputMail");
let topError = document.querySelector("#topError");
let bottomError = document.querySelector("#bottomError");
let regexCode = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;

function checkMail(value) {
  if (value.match(regexCode)) {
    console.log("basst");
    return true;
  } else {
    console.log("basst ed");
    return false;
  }
}

function checkTopMailInput() {
  console.log(topInput.value);
  if (checkMail(topInput.value)) {
    topError.style.display = "none";
    topInput.classList.remove("redBorder");
    topInput.classList.add("greenBorder");
    console.log("send data");
  } else {
    topError.style.display = "block";
    topInput.classList.add("redBorder");
    topInput.classList.remove("greenBorder");
    console.log("send data");
  }
}

function checkBottomMailInput() {
  console.log(bottomInput.value);
  if (checkMail(bottomInput.value)) {
    bottomError.style.display = "none";
    bottomInput.classList.remove("redBorder");
    bottomInput.classList.add("greenBorder");
    console.log("send data");
  } else {
    bottomError.style.display = "block";
    bottomInput.classList.add("redBorder");
    bottomInput.classList.remove("greenBorder");
    console.log("send data");
  }
}

function init() {
  document
    .querySelector("#topBtn")
    .addEventListener("click", checkTopMailInput);
  document
    .querySelector("#bottomBtn")
    .addEventListener("click", checkBottomMailInput);
}

window.onload = init();
