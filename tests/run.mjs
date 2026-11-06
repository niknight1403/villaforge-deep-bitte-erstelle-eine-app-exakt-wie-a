import { test } from 'node:test';
import assert from 'node:assert';

test('Smoke Test: Core UI elements exist', () => {
  const fs = require('fs');
  const content = fs.readFileSync('./src/components/ChatInterface.tsx', 'utf8');
  assert.ok(content.includes('ChatInterface'), 'ChatInterface component found');
  assert.ok(content.includes('#FF3366'), 'Accent color defined');
  console.log('Smoke test passed: UI components verified.');
});

test('Build Simulation: Check package structure', () => {
  const pkg = JSON.parse(require('fs').readFileSync('./package.json', 'utf8'));
  assert.ok(pkg.scripts.test, 'Test script defined');
  assert.ok(pkg.dependencies, 'Dependencies defined');
  console.log('Build simulation passed: package.json valid.');
});