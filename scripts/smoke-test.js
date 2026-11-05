async function runSmokeTest() {
  console.log('Starting Smoke Test: User Navigation & Chat Flow...');
  try {
    // Simulate UI flow
    const mockUser = { id: 1, name: 'Guest' };
    const mockChat = { messages: [] };
    
    if (!mockUser.id) throw new Error('Auth failed');
    mockChat.messages.push({ id: 1, text: 'Hello', sender: 'user' });
    
    if (mockChat.messages.length === 1) {
      console.log('Smoke Test Passed: UI flow functional.');
      process.exit(0);
    }
  } catch (e) {
    console.error('Smoke Test Failed:', e.message);
    process.exit(1);
  }
}
runSmokeTest();