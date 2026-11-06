const test = require('node:test');
const assert = require('node:assert');

test('Smoke Test: Core UI Flow', async () => {
  const fs = require('fs');
  const exists = fs.existsSync('./public/index.html');
  assert.strictEqual(exists, true, 'Frontend entry point missing');
  console.log('Smoke test passed: UI entry point found.');
});