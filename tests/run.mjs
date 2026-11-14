import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';

test('Smoke Test: Check core files exist', () => {
  const required = ['app/page.tsx', 'components/ChatInterface.tsx', 'lib/mockAI.ts'];
  required.forEach(file => {
    assert.ok(fs.existsSync(file), `File ${file} missing`);
  });
});

test('Smoke Test: Mock AI response', async () => {
  const { getMockResponse } = await import('../lib/mockAI.ts');
  const response = await getMockResponse('hello');
  assert.strictEqual(typeof response, 'string');
  assert.ok(response.length > 0);
});

console.log('Tests passed successfully.');