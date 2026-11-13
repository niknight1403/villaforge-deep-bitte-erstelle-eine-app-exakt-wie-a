async function runSmokeTest() {
  console.log('Starting Smoke Test for Aurora Companion Studio...');
  try {
    const fs = require('fs');
    const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    if (pkg.name !== 'aurora-companion-studio') throw new Error('Invalid project name');
    console.log('Smoke Test Passed: Project structure verified.');
    process.exit(0);
  } catch (err) {
    console.error('Smoke Test Failed:', err.message);
    process.exit(1);
  }
}
runSmokeTest();