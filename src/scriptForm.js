"use strict";

/* Click du bonton envoyer */
let btnTest = document.getElementById('buttonForm');
btnTest.onclick = function(){
    alert('Message envoyé');
    /*razForm();*/
};

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