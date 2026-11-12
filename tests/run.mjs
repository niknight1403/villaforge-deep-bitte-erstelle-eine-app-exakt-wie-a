import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';

console.log('--- Starting Smoke Test ---');

test('Verify index.html exists', () => {
  const exists = fs.existsSync('index.html');
  assert.strictEqual(exists, true, 'index.html should exist');
});

test('Verify package.json structure', () => {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  assert.ok(pkg.name, 'Package must have a name');
});

console.log('--- Smoke Test Passed ---');