const fs = require('fs');
const path = require('path');
const assert = require('assert');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

assert.ok(html.includes('discovery-container'), 'Discovery-Container fehlt');
assert.ok(html.includes('chat-form'), 'Chat-Formular fehlt');
assert.ok(html.includes('chat-input'), 'Chat-Eingabe fehlt');
assert.ok(!/import\s+.*from\s+['"]\.\//.test(html), 'index.html darf keine lokalen ES-Module importieren');
assert.ok(html.includes('companions'), 'Beispieldaten fehlen');
assert.ok(html.includes('oeffneChat'), 'Chat-Logik fehlt');
assert.ok(html.includes('addEventListener'), 'Event-Bindung fehlt');

const namen = ['Luna', 'Mira', 'Nova'];
for (const n of namen) assert.ok(html.includes(n), 'Begleiterin ' + n + ' fehlt');

console.log('tests: ' + 7 + ' Pruefungen erfolgreich, ' + namen.length + ' Datensaetze vorhanden');
