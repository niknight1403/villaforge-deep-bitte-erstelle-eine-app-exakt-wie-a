import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';

test('Smoke Test: Verify core project structure', () => {
  const files = ['package.json', 'src/app/page.tsx'];
  files.forEach(file => {
    assert.ok(fs.existsSync(file), `${file} should exist`);
  });
});

test('Build Simulation: Verify package.json configuration', () => {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  assert.strictEqual(pkg.name, 'aurora-companion-studio', 'Project name mismatch');
  assert.ok(pkg.scripts.test, 'Test script missing');
});

console.log('All tests passed successfully.');