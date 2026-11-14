const fs = require('fs');

async function runSmokeTest() {
  console.log('--- Starting Smoke Test: Aurora Companion Studio ---');
  
  try {
    // Check if critical files exist
    const requiredFiles = ['package.json', 'tailwind.config.ts', 'src/app/page.tsx'];
    for (const file of requiredFiles) {
      if (!fs.existsSync(file)) {
        throw new Error(`Missing critical file: ${file}`);
      }
    }
    
    console.log('Check 1: File Structure OK');
    
    // Simulate UI flow check
    const pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');
    if (!pageContent.includes('Aurora Companion Studio')) {
      throw new Error('Branding missing in main page');
    }
    
    console.log('Check 2: Branding OK');
    console.log('--- Smoke Test Passed Successfully ---');
    process.exit(0);
  } catch (error) {
    console.error('--- Smoke Test Failed ---');
    console.error(error.message);
    process.exit(1);
  }
}

runSmokeTest();