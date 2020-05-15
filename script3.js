let fenetre;
function popup() {
    fenetre = window.open("https://google.com");
}

function closePopup() {
    fenetre.close();
}

function main() {
    let pop = document.getElementById("popup");
    let cPop = document.getElementById("ClosePopup");
    pop.addEventListener("click",popup);
    cPop.addEventListener("click",closePopup);
}

main();