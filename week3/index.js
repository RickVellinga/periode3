
const persoon = {

  voornaam: 'Rick',
  achternaam: 'Vellinga',
  tussenvoegsels: ''

}

function roepPersoon() {
  document.write("Naam is:" + " " + persoon.voornaam + " " + persoon.achternaam);
}

const boek = {

  taal: 'Nederlands',
  pagina: 287,
  bindwijze: 'Paperback',
  druk: 3,
  auteur: 'Berna de Boer'

}

function Boek() {
  document.write("Informatie Boek:" + "<br>" + "<br>" + boek.taal.toUpperCase() + "<br>" + boek.pagina + "<br>" + boek.bindwijze + "<br>" + boek.druk + "<br>" + boek.auteur);
}

const auto = {

  merk: 'Tesla',
  model: 'Model X',
  gewicht: '2472 kg',
  motorinhoud: '259 pk',
  kleur: 'wit'

}

function Auto(merk, model, gewicht, motorinhoud, kleur) {

  const autos = this;

  autos.merk = merk;
  autos.model = model;
  autos.gewicht = gewicht;
  autos.motorinhoud = motorinhoud;
  autos.kleur = kleur;

  }

  const auto1 = new Auto('Audi', 'R8', '1530 kg', 'V10', 'Zwart');
  const auto2 = new Auto('Mercedes', 'GLA', '1670 kg', '156pk', 'Wit');

  function roepAuto() {
    document.write(auto.merk + "<br>" + auto.model + "<br>" + auto.gewicht + "<br>" + auto.motorinhoud + "<br>" + auto.kleur + "<br>");
    document.write("<br>" + "<strong>" + "In 2 Aparte Variablen:" + "</strong>" + "<br>" )
    document.write("<br>" + auto1.merk + "<br>" + auto1.model + "<br>" + auto1.gewicht + "<br>" + auto1.motorinhoud + "<br>" + auto1.kleur + "<br>");
    document.write("<br>" + auto2.merk + "<br>" + auto2.model + "<br>" + auto2.gewicht + "<br>" + auto2.motorinhoud + "<br>" + auto2.kleur + "<br>");
  }
