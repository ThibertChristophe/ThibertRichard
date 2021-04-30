"use strict"

/* Script pour faire le zoom des photos de la page Exposition (expo.html) */

/* Liste des photos de la page */
const menu = document.querySelectorAll('div.menuTop.animate__animated.animate__fadeInDown > nav > li >a');

const barre = document.getElementsByClassName('lineOver');

console.log(menu);
/* Ajout d'event de click sur la liste des photos */
/* On rendra visible la zone de zoom avec la photo concernée quand on click sur une de nos photos */
menu.forEach((elem) => {
    elem.addEventListener('mouseover', (e) => {
        /* Recup l'image source */
       console.log("IN");
    });
    elem.addEventListener('mouseout', (e) => {
        /* Recup l'image source */
       console.log("OUT");
    });
});


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

