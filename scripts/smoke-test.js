console.log('Starting Smoke Test...');
const fs = require('fs');
const path = require('path');

function checkFile(filePath) {
  if (fs.existsSync(path.join(__dirname, '..', filePath))) {
    console.log(`[PASS] ${filePath} exists.`);
  } else {
    console.error(`[FAIL] ${filePath} missing.`);
    process.exit(1);
  }
}

checkFile('package.json');
checkFile('tailwind.config.ts');
console.log('Smoke Test Passed.');