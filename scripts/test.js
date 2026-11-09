// Prueft das ausgelieferte Produkt (dist/index.html) auf die acht Oberflaechen.
const assert = require('node:assert');
const { readFileSync, statSync, existsSync } = require('node:fs');
// Der Build kann dist/ in einer Kopie erzeugen; geprueft wird der Produktstand.
const datei = ['dist/index.html', 'mybabes-app.html', 'index.html'].find((f) => existsSync(f));
assert.ok(datei, 'Kein Produktstand gefunden (dist/index.html, mybabes-app.html, index.html)');
const groesse = statSync(datei).size;
assert.ok(groesse > 20000, 'Produkt zu klein: ' + groesse + ' Bytes');
const html = readFileSync(datei, 'utf8').toLowerCase();
const flaechen = {
  'F1 Explore': 'explore',
  'F2 Charakter-Builder': 'charakter',
  'F3 Chat/Galerie': 'galerie',
  'F4 Stimme': 'vorlesen',
  'F5 Bildgenerator': 'bild',
  'F6 Video/Reels': 'video',
  'F7 Story-Creator': 'story',
  'F8 Creator/Legal': 'creator'
};
const fehlt = Object.entries(flaechen).filter(([, m]) => !html.includes(m)).map(([k]) => k);
assert.deepStrictEqual(fehlt, [], 'Oberflaechen fehlen: ' + fehlt.join(', '));
assert.ok(!html.includes('villa-produkt wird geladen'), 'Platzhalter statt Produkt');
console.log('test: ' + (8 - fehlt.length) + '/8 Oberflaechen belegt, ' + groesse + ' Bytes');
