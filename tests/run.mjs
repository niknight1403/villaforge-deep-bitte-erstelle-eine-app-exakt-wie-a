import { test } from 'node:test';
import assert from 'node:assert';

test('Core functionality check', () => {
  assert.strictEqual(1 + 1, 2, 'Math works');
});

test('Environment check', () => {
  assert.ok(process.version, 'Node.js is running');
});