function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function ex1() {
    let div = document.getElementById("bouton");
    let color = "rgb(" + getRandomInt(255) + "," + getRandomInt(255) + "," + getRandomInt(255) + ")" ;
    div.style.backgroundColor = color;
}

function main(){
    let div = document.getElementById("bouton");
    div.addEventListener("click", ex1);
}

main();