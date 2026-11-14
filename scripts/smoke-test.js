const http = require('http');

async function runSmokeTest() {
  console.log('Starting Smoke Test: Aurora Companion Studio...');
  
  // Simulate a check for the main entry point and core components
  const requiredPaths = ['app/page.tsx', 'components/ChatInterface.tsx'];
  const fs = require('fs');
  
  for (const path of requiredPaths) {
    if (!fs.existsSync(path)) {
      console.error(`Smoke Test Failed: Missing file ${path}`);
      process.exit(1);
    }
  }

  console.log('Smoke Test Passed: Core components found.');
  process.exit(0);
}

runSmokeTest();