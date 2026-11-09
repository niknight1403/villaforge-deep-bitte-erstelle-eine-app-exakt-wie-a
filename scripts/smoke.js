// Kurzprobe: das Produkt ist da und vollstaendig.
const { readFileSync, existsSync } = require('node:fs');
const datei = ['dist/index.html', 'mybabes-app.html', 'index.html'].find((f) => existsSync(f));
if (!datei) {
  console.error('smoke: kein Produktstand gefunden');
  process.exit(1);
}
const html = readFileSync(datei, 'utf8').toLowerCase();
const pflicht = { explore: 'F1', charakter: 'F2', galerie: 'F3', vorlesen: 'F4', bild: 'F5', video: 'F6', story: 'F7', creator: 'F8' };
const fehlt = Object.entries(pflicht).filter(([m]) => !html.includes(m)).map(([, k]) => k);
if (fehlt.length) {
  console.error('smoke: Produktmarker fehlt: ' + fehlt.join(', '));
  process.exit(1);
}
console.log('smoke: Produktmarker vollstaendig (8/8)');
