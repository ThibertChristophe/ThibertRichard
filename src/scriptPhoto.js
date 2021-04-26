/* Liste des images de la page */
const image = document.querySelectorAll('div.listeTableau > img');

/* La div de zoom d'image */
const zoom  = document.getElementById('zoom');

/* L'image en grand */
const grandeIMG = document.getElementById('imgZoom');

/* Ajout d'event de click sur la liste des images */
/* On ren visible la zone de zoom avec la photo concernée */
image.forEach((elem) => {
    elem.addEventListener('click', (e) => {
        grandeIMG.src = e.srcElement.currentSrc;
        zoom.style.visibility = "visible";
    });
});

/* Click sur la zone de zoom */
zoom.addEventListener('click', () => {
    zoom.style.visibility = "hidden";
})
