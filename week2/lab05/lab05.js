// Dit vraagt wat de einddatum is en zet het in een const
const einddatum = prompt('Wat is de einddatum JJJJ-MM-DD?');

// Dit zorgt ervoor dat de einddatum de deadline wordt door middel van Date.
const deadline = new Date(einddatum);

// Dit zegt de deadline + de date die je hebt ingevuld.
document.write('<br/>Deadline:'+deadline );

// Dit zegt de deadline + de date -1
document.write('<br/>Deadline:'+deadline );
deadline.getDay()
console.log(deadline.getDay());
