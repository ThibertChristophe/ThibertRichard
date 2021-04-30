"use strict"

/**
 * Fait disparaitre le menu header quand il touche la div de contenu
 */
let menuT = document.getElementById('menuTop');
window.onscroll = function() {
    const containt = document.getElementsByClassName('contentIndex');
    let y = containt[0].getBoundingClientRect().y;
    let yMenu = 57;
    if (yMenu > y) {
        menuT.style.top = "-58px";
    } else{
    menuT.style.top = "0";
    }
}

