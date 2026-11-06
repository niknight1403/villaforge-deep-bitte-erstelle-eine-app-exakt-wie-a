const http = require('http');

const PORT = 3000;

async function runSmokeTest() {
  console.log('Starting Smoke Test...');
  
  // Check if server can be reached (simulated)
  try {
    console.log('Verifying UI structure...');
    // Verify critical components exist
    const fs = require('fs');
    if (fs.existsSync('./src/components/ChatInterface.tsx')) {
      console.log('SUCCESS: ChatInterface component found.');
    } else {
      throw new Error('ChatInterface component missing');
    }
    
    console.log('Smoke test passed successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Smoke test failed:', error.message);
    process.exit(1);
  }
}

runSmokeTest();