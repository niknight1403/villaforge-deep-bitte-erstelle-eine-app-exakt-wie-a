const http = require('http');

async function runSmokeTest() {
  console.log('Starting smoke test for mybabes-clone...');
  
  // Basic check for required files
  const fs = require('fs');
  if (!fs.existsSync('./app/page.tsx')) {
    console.error('Critical Error: app/page.tsx missing');
    process.exit(1);
  }

  console.log('Smoke test: App structure verified.');
  process.exit(0);
}

runSmokeTest().catch(err => {
  console.error(err);
  process.exit(1);
});