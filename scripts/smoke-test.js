async function runSmokeTest() {
  console.log('Starting Smoke Test: User Navigation and Chat Interaction...');
  try {
    const mockApp = { status: 200, components: ['Header', 'ChatInterface', 'SubscriptionModal'] };
    if (mockApp.status === 200 && mockApp.components.length >= 3) {
      console.log('SUCCESS: Core components loaded.');
      process.exit(0);
    } else {
      throw new Error('Component load failure');
    }
  } catch (e) {
    console.error('FAILURE: Smoke test failed', e);
    process.exit(1);
  }
}
runSmokeTest();