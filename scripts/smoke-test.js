const http = require('http');

async function runSmokeTest() {
  console.log('Starting smoke test for Aurora Companion Studio...');
  
  // Simulate a server check
  const mockServer = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', version: '0.1.0' }));
  });

  mockServer.listen(3000, () => {
    console.log('Server running on port 3000');
    http.get('http://localhost:3000', (res) => {
      if (res.statusCode === 200) {
        console.log('Smoke test passed: Server reachable.');
        process.exit(0);
      } else {
        console.error('Smoke test failed: Unexpected status code.');
        process.exit(1);
      }
    }).on('error', (e) => {
      console.error('Smoke test failed: ' + e.message);
      process.exit(1);
    });
  });
}

runSmokeTest();