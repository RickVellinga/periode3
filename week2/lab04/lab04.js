// Een array die kleuren heeft + een document.write die de kleuren laat zien
const palet = new Array('wit ','blauw ','groen ','rood ','zwart');
document.write('<br />Palet is nu: ' + palet);

// Hier komt een prompt die vraagt om een kleur erin te zetten.
const nieuwekleur = prompt('Typ een nieuwe kleur in');

// Dit zet de nieuwe kleur achteraan de array
document.write('<br />Palet is nu: ' + palet + ' , '  + nieuwekleur);

// Hier komt een prompt die vraagt om een kleur erin te zetten.
const nieuwekleur = prompt( 'Typ een nieuwe kleur in:');

// Dit zet de nieuwe kleur vooraan in de lijst.
document.write('<br />Palet is nu: ' + nieuwekleur + ' , ' + palet);

// Dit sorteert de lijst
document.write('<br />Palet is nu: ' + palet);
palet.sort();
