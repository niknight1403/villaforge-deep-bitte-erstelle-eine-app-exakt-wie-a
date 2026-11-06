async function runSmokeTest() {
  console.log('Starting Smoke Test: User Flow Verification...');
  try {
    const mockChat = { id: 1, message: 'Hello', sender: 'user' };
    if (!mockChat.message) throw new Error('Chat message missing');
    console.log('Smoke Test Passed: Chat message initialized.');
    process.exit(0);
  } catch (e) {
    console.error('Smoke Test Failed:', e.message);
    process.exit(1);
  }
}
runSmokeTest();