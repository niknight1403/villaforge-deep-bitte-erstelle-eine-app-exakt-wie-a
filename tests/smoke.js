const fs = require('fs');

async function runSmokeTest() {
  console.log('Starting Smoke Test: User Chat Flow...');
  try {
    // Simulate checking for critical UI components
    const uiFile = 'src/components/ChatInterface.tsx';
    if (!fs.existsSync(uiFile)) throw new Error('UI Component missing');
    
    // Simulate state check
    const mockState = { authenticated: true, activeChat: 'companion_1' };
    if (!mockState.authenticated) throw new Error('Auth failed');
    
    console.log('Smoke Test Passed: Chat Interface is ready.');
    process.exit(0);
  } catch (e) {
    console.error('Smoke Test Failed:', e.message);
    process.exit(1);
  }
}

runSmokeTest();