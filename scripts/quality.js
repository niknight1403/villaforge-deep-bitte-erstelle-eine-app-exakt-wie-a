const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const befunde = [];

if (!/<title>[^<]{3,}<\/title>/.test(html)) befunde.push('kein Titel');
if (!html.includes('viewport')) befunde.push('kein Viewport-Meta');
if (!html.includes('lang="de"')) befunde.push('keine Sprachauszeichnung');
if (/<script[^>]+src=["'](?!https?:)/.test(html)) befunde.push('lokales Script ohne Datei');
if (!html.includes('overflow-y-auto')) befunde.push('Chat-Log ohne Scrollverhalten');
if ((html.match(/alt=/g) || []).length === 0 && /<img/i.test(html)) befunde.push('Bilder ohne alt');
if (html.length < 1500) befunde.push('Seite zu duenn (' + html.length + ' Bytes)');

if (befunde.length) {
  console.error('quality: ' + befunde.join('; '));
  process.exit(1);
}
console.log('quality: alle Strukturpruefungen bestanden (' + html.length + ' Bytes, 0 Befunde)');
