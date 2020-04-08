function Opdracht(vak, beschrijving) {
    let opdrObj = this;

    opdrObj.vak = vak;
    opdrObj.beschrijving = beschrijving;
}

// OPDRACHT 1.
// Maak de Cijfer functie af.

// opdracht is een object die met behulp van de bovenstaande
// functie is aangemaakt.

// Cijfer een nummer van 0 tot 10

function Cijfer(opdracht, cijfer) {

    let cijferObj = this;
    cijferObj.opdracht = opdracht;

    (cijfer <= 10 && cijfer >= 0)
        ? cijferObj.cijfer = cijfer
        : cijferObj.cijfer = 0;

    // if (cijfer <= 10 && cijfer >=0) {
    //     cijferObj.cijfer = cijfer;
    // } else {
    //     cijferObj.cijfer = 0;
    // }


}

// OPDRACHT 2.
// Maak verschillende variabelen voor je opdrachten.
    // Minimaal 3 opdrachten voor 3 verschillende vakken.
    // Totaal dus 9 opdrachten
// Kijk in week6 of studie.js hoe je een variabele aanmaakt met het keyword new

let op1 = new Opdracht('FRO', 'gallerij');
let op2 = new Opdracht('FRO', 'review');
let op3 = new Opdracht('FRO', 'object');
let op4 = new Opdracht('PHP', 'gallerij');
let op5 = new Opdracht('PHP', 'review');
let op6 = new Opdracht('PHP', 'object');
let op7 = new Opdracht('CMS', 'gallerij');
let op8 = new Opdracht('CMS', 'review');
let op9 = new Opdracht('CMS', 'object');

// Maak voor al deze opdrachten een cijfer variabele aan
// Kijk in week6 of studie.js hoe je een variabele aanmaakt met het keyword new
let c1 = new Cijfer(op1, 10);
let c2 = new Cijfer(op2, 0);
let c3 = new Cijfer(op3, 0);
let c4 = new Cijfer(op4, 8);
let c5 = new Cijfer(op5, 9);
let c6 = new Cijfer(op6, 9);
let c7 = new Cijfer(op7, 6);
let c8 = new Cijfer(op8, 4);
let c9 = new Cijfer(op9, 7);

