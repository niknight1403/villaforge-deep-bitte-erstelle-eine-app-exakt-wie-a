import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';

test('Smoke Test: Verify UI components exist', () => {
  const uiFile = 'src/components/ChatInterface.tsx';
  assert.ok(fs.existsSync(uiFile), 'ChatInterface.tsx should exist');
  console.log('Smoke test passed: UI components verified.');
});

test('Build Simulation: Check project structure', () => {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  assert.ok(pkg.name, 'package.json must have a name');
  console.log('Build simulation passed: package.json valid.');
});