"use strict";

/* Click du bonton envoyer */
const btnTest = document.getElementById('buttonForm');


btnTest.addEventListener('click', () => {
    alert("OK");
});

/* Remise à zéro/vide des champs du form*/
function razForm(){
    let nom = document.getElementById('fname');
    nom.value = '';
    let prenom = document.getElementById('lname');
    prenom.value = '';
    let email = document.getElementById('email');
    email.value = '';
    let message = document.getElementById('message');
    message.value = '';
}