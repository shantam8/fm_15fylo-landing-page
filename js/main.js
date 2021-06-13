let topInput = document.querySelector("#topInputMail");
let bottomInput = document.querySelector("#bottomInputMail");







function checkTopMailInput(){
    console.log(topInput.value);
}

function checkBottomMailInput(){
    console.log(bottomInput.value);
}



function init(){
    document.querySelector("#topBtn").addEventListener("click", checkTopMailInput);
    document.querySelector("#bottomBtn").addEventListener("click", checkBottomMailInput);
}



window.onload = init();