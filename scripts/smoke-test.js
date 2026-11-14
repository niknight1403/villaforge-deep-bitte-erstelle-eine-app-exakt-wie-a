const fs = require('fs');

async function runSmokeTest() {
  console.log('Starting Smoke Test: Aurora Companion Studio...');
  try {
    // Check if critical files exist
    const criticalFiles = ['package.json', 'next.config.js', 'tailwind.config.ts'];
    for (const file of criticalFiles) {
      if (!fs.existsSync(file)) {
        console.error(`Missing critical file: ${file}`);
        process.exit(1);
      }
    }
    console.log('Smoke Test Passed: Critical infrastructure verified.');
    process.exit(0);
  } catch (err) {
    console.error('Smoke Test Failed:', err);
    process.exit(1);
  }
}

runSmokeTest();