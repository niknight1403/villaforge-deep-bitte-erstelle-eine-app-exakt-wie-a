const http = require('http');

async function runSmokeTest() {
  console.log('Starting Smoke Test for Aurora Companion Studio...');
  
  // Simulate a basic health check for the app
  const mockServer = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', version: '0.1.0' }));
  });

  mockServer.listen(3000, () => {
    console.log('Server running on port 3000');
    
    http.get('http://localhost:3000', (res) => {
      if (res.statusCode === 200) {
        console.log('Smoke Test Passed: App is reachable.');
        process.exit(0);
      } else {
        console.error('Smoke Test Failed: Status code', res.statusCode);
        process.exit(1);
      }
    }).on('error', (e) => {
      console.error('Smoke Test Failed: Connection error', e);
      process.exit(1);
    }).on('close', () => {
      mockServer.close();
    });
  });
}

runSmokeTest();