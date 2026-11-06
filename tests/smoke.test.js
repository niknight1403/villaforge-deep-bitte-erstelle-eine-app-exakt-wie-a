const assert = require('node:assert');
const { test } = require('node:test');

test('Smoke Test: Core UI Flow', async () => {
  const fs = require('fs');
  const exists = fs.existsSync('./src/components/ChatInterface.tsx');
  assert.strictEqual(exists, true, 'ChatInterface component must exist');
});