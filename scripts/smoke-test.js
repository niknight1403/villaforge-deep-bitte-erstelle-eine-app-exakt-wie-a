const fs = require('fs');
const path = require('path');

async function runSmokeTest() {
  console.log('Starting Smoke Test for Aurora Companion Studio...');
  
  try {
    // Check if critical files exist
    const criticalFiles = ['package.json', 'tailwind.config.ts'];
    for (const file of criticalFiles) {
      if (!fs.existsSync(path.join(process.cwd(), file))) {
        throw new Error(`Critical file missing: ${file}`);
      }
    }
    
    console.log('Smoke Test Passed: Core infrastructure verified.');
    process.exit(0);
  } catch (error) {
    console.error('Smoke Test Failed:', error.message);
    process.exit(1);
  }
}

runSmokeTest();