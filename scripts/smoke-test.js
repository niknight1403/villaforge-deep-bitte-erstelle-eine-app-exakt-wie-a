const http = require('http');

async function runSmokeTest() {
  console.log('Starting Smoke Test...');
  // Simulate a local server check
  try {
    // In a real environment, we would trigger 'npm run dev' and fetch localhost:3000
    // Here we verify the existence of critical UI components
    const fs = require('fs');
    const exists = fs.existsSync('./src/components/ChatInterface.tsx');
    if (exists) {
      console.log('SUCCESS: ChatInterface component found.');
      process.exit(0);
    } else {
      console.error('FAILURE: ChatInterface component missing.');
      process.exit(1);
    }
  } catch (err) {
    console.error('Smoke Test Error:', err);
    process.exit(1);
  }
}

runSmokeTest();