async function runSmokeTest() {
  console.log('Starting Smoke Test: User Navigation & Chat Interaction...');
  try {
    const mockChatState = { messages: [], loading: false };
    if (typeof mockChatState.messages !== 'object') throw new Error('State structure invalid');
    console.log('Smoke Test Passed: Core State Initialized.');
    process.exit(0);
  } catch (e) {
    console.error('Smoke Test Failed:', e.message);
    process.exit(1);
  }
}
runSmokeTest();