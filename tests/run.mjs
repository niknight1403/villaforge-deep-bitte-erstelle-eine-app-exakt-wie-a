import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';

test('Smoke Test: Check UI structure existence', async () => {
  const content = fs.readFileSync('./src/components/ChatInterface.tsx', 'utf8');
  assert.ok(content.includes('div'), 'ChatInterface should contain div elements');
  assert.ok(content.includes('className'), 'ChatInterface should use Tailwind classes');
});

test('Build Simulation: Check package.json scripts', () => {
  const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
  assert.ok(pkg.scripts.build, 'Build script must be defined');
  assert.ok(pkg.scripts.test, 'Test script must be defined');
});