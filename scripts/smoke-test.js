const http = require('http');

async function runSmokeTest() {
  console.log('Starting Smoke Test for Aurora Companion Studio...');
  
  // Simulate a local server check
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET',
  };

  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      console.log(`Status Code: ${res.statusCode}`);
      if (res.statusCode === 200 || res.statusCode === 404) {
        console.log('Smoke Test Passed: Server reachable.');
        resolve();
      } else {
        reject(new Error(`Server returned status ${res.statusCode}`));
      }
    });

    req.on('error', (e) => {
      console.error(`Smoke Test Failed: ${e.message}`);
      reject(e);
    });

    req.end();
  });
}

runSmokeTest().catch(() => process.exit(1));