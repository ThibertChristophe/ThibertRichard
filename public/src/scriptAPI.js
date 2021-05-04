"use strict"

/**
 * Test d'appel d'API et parcours du resultat JSON
 */
let input = 'belgium';
let pays;
const fetchPays = async() => {
    /* Recup de l'api */
    pays = await fetch('https://restcountries.eu/rest/v2/name/'+input)
    .then((reponse) => reponse.json())
    .then(data => {
        console.log(data);
        /* Accès direct */
        console.log("Pays 1 : "+data[0].name);
        console.log("Population 1 : "+data[0].population);
        /* Accès forEach */
        data.forEach((item) => {
            console.log("Pays 2 : "+item.name);
            console.log("Population 2 : "+item.population);
        })
    })
}

/* fetchHeure(); */