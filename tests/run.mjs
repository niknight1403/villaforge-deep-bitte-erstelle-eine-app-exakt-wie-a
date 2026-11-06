import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';

// Korrigierter Smoke-Test: Top-level await entfernt
test('Smoke Test: App-Struktur vorhanden', () => {
  const files = fs.readdirSync('./');
  assert.ok(files.includes('package.json'), 'package.json fehlt');
  console.log('Smoke Test erfolgreich: Projektstruktur validiert.');
});

test('UI-Logik: Chat-Interface existiert', () => {
  const exists = fs.existsSync('./src/components/ChatInterface.tsx');
  assert.ok(exists, 'ChatInterface.tsx fehlt');
  console.log('UI-Test erfolgreich: Chat-Interface gefunden.');
});