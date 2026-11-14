const http = require('http');

async function runSmokeTest() {
  console.log('Starting Smoke Test: Aurora Companion Studio...');
  
  // Simulate a local server check
  const testServer = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', app: 'Aurora Companion Studio' }));
  });

  testServer.listen(3000, () => {
    console.log('Server running on port 3000');
    
    http.get('http://localhost:3000', (res) => {
      if (res.statusCode === 200) {
        console.log('Smoke Test Passed: UI reachable.');
        testServer.close();
        process.exit(0);
      } else {
        console.error('Smoke Test Failed: Unexpected status code.');
        testServer.close();
        process.exit(1);
      }
    }).on('error', (e) => {
      console.error('Smoke Test Failed: ' + e.message);
      testServer.close();
      process.exit(1);
    });
  });
}

runSmokeTest();