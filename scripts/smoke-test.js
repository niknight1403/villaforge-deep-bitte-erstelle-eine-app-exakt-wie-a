const fs = require('fs');

async function smokeTest() {
  console.log('--- Starting Smoke Test: Aurora Companion Studio ---');
  
  try {
    // Check core files existence
    const requiredFiles = ['package.json', 'tailwind.config.ts', 'src/app/layout.tsx'];
    requiredFiles.forEach(file => {
      if (!fs.existsSync(file)) throw new Error(`Missing critical file: ${file}`);
    });

    // Simulate UI Flow Check
    console.log('Verification: Branding check...');
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    if (pkg.name !== 'aurora-companion-studio') throw new Error('Branding mismatch in package.json');

    console.log('Smoke Test Passed: Core infrastructure and branding verified.');
    process.exit(0);
  } catch (err) {
    console.error('Smoke Test Failed:', err.message);
    process.exit(1);
  }
}

smokeTest();