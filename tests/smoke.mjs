import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';

test('Smoke Test: Verify project structure and core files', async (t) => {
  const files = ['package.json', 'src/app/page.tsx', 'tailwind.config.ts'];
  for (const file of files) {
    assert.ok(fs.existsSync(file), `${file} should exist`);
  }
});

test('Smoke Test: Verify package.json configuration', async (t) => {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  assert.strictEqual(pkg.name, 'aurora-companion-studio', 'Name mismatch');
  assert.ok(pkg.scripts.test, 'Test script missing');
});