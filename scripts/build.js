const fs = require('fs');
const path = require('path');

const quelle = path.join(__dirname, '..', 'index.html');
const zielDir = path.join(__dirname, '..', 'dist');
const ziel = path.join(zielDir, 'index.html');

if (!fs.existsSync(quelle)) {
  console.error('build: index.html fehlt');
  process.exit(1);
}
const html = fs.readFileSync(quelle, 'utf8');
if (html.length < 800) {
  console.error('build: index.html ist zu klein fuer ein echtes Produkt');
  process.exit(1);
}
fs.mkdirSync(zielDir, { recursive: true });
fs.writeFileSync(ziel, html, 'utf8');
console.log('build: dist/index.html geschrieben (' + html.length + ' Bytes)');
