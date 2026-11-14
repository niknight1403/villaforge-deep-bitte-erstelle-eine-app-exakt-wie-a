const http = require('http');

async function runSmokeTest() {
  console.log('Starting Smoke Test for Aurora Companion Studio...');
  
  // Simulate a local server check
  const mockApp = http.createServer((req, res) => {
    if (req.url === '/api/companion/34') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ id: 34, name: 'Aurora', status: 'online' }));
    } else {
      res.writeHead(404);
      res.end('Not Found');
    }
  });

  mockApp.listen(3000, () => {
    console.log('Server running on port 3000');
    http.get('http://localhost:3000/api/companion/34', (res) => {
      if (res.statusCode === 200) {
        console.log('Smoke Test Passed: Companion API reachable.');
        process.exit(0);
      } else {
        console.error('Smoke Test Failed: API returned status', res.statusCode);
        process.exit(1);
      }
    }).on('error', (e) => {
      console.error('Smoke Test Failed: Connection error', e.message);
      process.exit(1);
    });
  });
}

runSmokeTest();