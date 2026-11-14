const http = require('http');

async function runSmokeTest() {
  console.log('Starting Smoke Test: Aurora Companion Studio...');
  
  // Basic check for app structure
  const requiredPaths = ['app/page.tsx', 'components/ChatInterface.tsx'];
  const fs = require('fs');
  
  for (const path of requiredPaths) {
    if (!fs.existsSync(path)) {
      console.error(`Smoke Test Failed: Missing ${path}`);
      process.exit(1);
    }
  }
  
  console.log('Smoke Test Passed: Core components verified.');
  process.exit(0);
}

runSmokeTest();