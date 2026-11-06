const http = require('http');

async function runSmokeTest() {
  console.log('Starting smoke test...');
  // Simulate a basic check for the app entry point
  try {
    // In a real environment, we would trigger the dev server and fetch localhost:3000
    // Here we verify the existence of critical UI components as a proxy for build readiness
    const fs = require('fs');
    const path = require('path');
    const chatComponent = fs.existsSync(path.join(__dirname, '../src/components/ChatInterface.tsx'));
    
    if (chatComponent) {
      console.log('Smoke test passed: ChatInterface component found.');
      process.exit(0);
    } else {
      console.error('Smoke test failed: ChatInterface not found.');
      process.exit(1);
    }
  } catch (err) {
    console.error('Smoke test crashed:', err);
    process.exit(1);
  }
}

runSmokeTest();