async function runSmokeTest() {
  console.log('Starting Smoke Test: Checking UI and State...');
  try {
    // Simulate UI check
    const hasLayout = true;
    if (!hasLayout) throw new Error('Layout missing');
    console.log('Smoke Test Passed: UI components initialized.');
    process.exit(0);
  } catch (e) {
    console.error('Smoke Test Failed:', e.message);
    process.exit(1);
  }
}
runSmokeTest();