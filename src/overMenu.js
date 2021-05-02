"use strict"

/**
 * Fait disparaitre le menu header quand il touche la div de contenu
 */
let menuT = document.getElementById('menuTop');
const yMenu = 57;
let fleche = document.getElementById('fleche');
fleche.addEventListener('click', () => {
    window.scrollTo(0,0);
})

window.addEventListener('scroll', () => {
    const containt = document.getElementsByClassName('containt');
    let y = containt[0].getBoundingClientRect().y;
    if (yMenu > y) {
        menuT.style.top = "-58px";
      //  fleche.style.visibility = 'visible';
    } else{
        menuT.style.top = "0";
       // fleche.style.visibility = 'hidden';
    }
});
