function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function ex1() {
    let div = document.getElementById("bouton");
    let color = "rgb(" + getRandomInt(255) + "," + getRandomInt(255) + "," + getRandomInt(255) + ")" ;
    div.style.backgroundColor = color;
}
function colorClicked(){
    let clicked = document.getElementById("bouton");
    clicked.style.background = randomColor();
}

function mouseEnterEvent(mouseEvent){
    let clicked = document.getElementById("bouton");
    console.log("x:" + mouseEvent.clientX + " y:" + mouseEvent.clientY);
    clicked.style.background = randomColor();
}

function randomColor(){
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    return "rgb(" + R + "," + G + "," + B +")";
}

function main(){
    let div = document.getElementById("bouton");
    div.addEventListener("click", ex1);
    div.addEventListener("mouseenter", mouseEnterEvent);
    div.addEventListener("click", colorClicked);
}

main();