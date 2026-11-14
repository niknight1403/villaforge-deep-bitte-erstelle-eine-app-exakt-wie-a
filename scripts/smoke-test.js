const fs = require('fs');

async function runSmokeTest() {
  console.log('--- Starting Smoke Test: Aurora Companion Studio ---');
  
  try {
    // Check if critical directory exists
    if (!fs.existsSync('./app')) {
      throw new Error('Directory /app missing. Next.js structure incomplete.');
    }
    
    // Simulate user flow: Check if main entry exists
    const hasPage = fs.existsSync('./app/page.tsx') || fs.existsSync('./app/page.js');
    if (!hasPage) {
      throw new Error('Entry point /app/page.tsx not found.');
    }

    console.log('Smoke Test Passed: Infrastructure verified.');
    process.exit(0);
  } catch (error) {
    console.error('Smoke Test Failed:', error.message);
    process.exit(1);
  }
}

runSmokeTest();