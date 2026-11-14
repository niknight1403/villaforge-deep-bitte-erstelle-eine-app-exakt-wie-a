const fs = require('fs');
const path = require('path');

async function runSmokeTest() {
  console.log('Starting Smoke Test for Aurora Companion Studio...');
  
  const requiredFiles = ['package.json', 'next.config.js', 'app/page.tsx'];
  for (const file of requiredFiles) {
    if (!fs.existsSync(path.join(process.cwd(), file))) {
      console.error(`Smoke Test Failed: Missing ${file}`);
      process.exit(1);
    }
  }

  console.log('Smoke Test Passed: Core infrastructure verified.');
  process.exit(0);
}

runSmokeTest();