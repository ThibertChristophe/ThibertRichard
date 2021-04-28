/* Script pour faire le zoom des photos de la page Exposition (expo.html) */

/* Liste des images de la page */
const image = document.querySelectorAll('div.listeTableau > img');
/* La div de zoom d'image */
const popup = document.getElementById('zoom');
/* L'image en grand */
const popup_grandeIMG = document.getElementById('imgZoom');

/* Ajout d'event de click sur la liste des images */
/* On rend visible la zone de zoom avec la photo concernée */
image.forEach((elem) => {
    elem.addEventListener('click', (e) => {
        /* Recup l'image source */
        popup_grandeIMG.src = e.target.currentSrc;
        popup.style.visibility = "visible";
    });
});

/* Click sur la zone de zoom pour "fermer" la popup*/
popup.addEventListener('click', () => {
    popup.style.visibility = "hidden";
});
