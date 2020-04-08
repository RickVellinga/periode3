// Cijfers met Call naar opdracht (vak)
function Cijfer(beschrijving, cijfer) {

    let cijferObj = this;
    cijferObj.beschrijving = beschrijving;
    cijferObj.cijfer = cijfer;

}

function Fro(beschrijving, cijfer) {
    Cijfer.call(this, beschrijving, cijfer);

    let fro = this;
    fro.vak = 'FRO';
}

function Php(beschrijving, cijfer) {
    Cijfer.call(this, beschrijving, cijfer);

    let php = this;
    php.vak = 'PHP';
}

const c1 = new Fro('Objecten', 2);
const c2 = new Fro('Functies', 2);
const c3 = new Fro('Arrays', 2);
const c4 = new Php('OOP', 2);
const c5 = new Php('Laravel', 2);
const c6 = new Php('SQL', 2);

console.log(c1, c2, c3, c4, c5, c6);
