const fs = require('fs');

async function runSmokeTest() {
  console.log('--- Starting Smoke Test for Aurora Companion Studio ---');
  
  const requiredFiles = ['package.json', 'src/app/page.tsx'];
  for (const file of requiredFiles) {
    if (!fs.existsSync(file)) {
      console.error(`FAIL: Required file missing: ${file}`);
      process.exit(1);
    }
  }
  
  console.log('SUCCESS: Core structure verified.');
  console.log('Smoke test passed.');
  process.exit(0);
}

runSmokeTest();