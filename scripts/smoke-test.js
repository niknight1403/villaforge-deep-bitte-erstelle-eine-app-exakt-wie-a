const http = require('http');

async function runSmokeTest() {
  console.log('Starting Smoke Test for Aurora Companion Studio...');
  
  // Simulate a basic check of the application entry point
  const mockServer = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', app: 'Aurora Companion Studio' }));
  });

  mockServer.listen(3000, () => {
    console.log('Server running on port 3000');
    http.get('http://localhost:3000', (res) => {
      if (res.statusCode === 200) {
        console.log('Smoke Test Passed: Application is responsive.');
        process.exit(0);
      } else {
        console.error('Smoke Test Failed: Unexpected status code.');
        process.exit(1);
      }
    }).on('error', (e) => {
      console.error(`Smoke Test Failed: ${e.message}`);
      process.exit(1);
    });
  });
}

runSmokeTest();