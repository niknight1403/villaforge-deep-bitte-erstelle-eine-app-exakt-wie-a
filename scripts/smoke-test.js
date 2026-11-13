const fs = require('fs');

async function runSmokeTest() {
  console.log('Starting Smoke Test for Aurora Companion Studio...');
  try {
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    if (pkg.name !== 'aurora-companion-studio') throw new Error('Invalid project name');
    console.log('Smoke Test Passed: Project structure verified.');
    process.exit(0);
  } catch (e) {
    console.error('Smoke Test Failed:', e.message);
    process.exit(1);
  }
}

runSmokeTest();