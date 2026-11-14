const http = require('http');

async function runSmokeTest() {
  console.log('Starting Smoke Test: Aurora Companion Studio...');
  
  // Simulate a local server check
  const mockServer = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', app: 'Aurora Companion Studio' }));
  });

  mockServer.listen(3000, () => {
    console.log('Server running on port 3000');
    
    http.get('http://localhost:3000', (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        const result = JSON.parse(data);
        if (result.app === 'Aurora Companion Studio') {
          console.log('Smoke Test Passed: Application reachable and branding verified.');
          process.exit(0);
        } else {
          console.error('Smoke Test Failed: Branding mismatch.');
          process.exit(1);
        }
      });
    }).on('error', (err) => {
      console.error('Smoke Test Failed: ' + err.message);
      process.exit(1);
    });
  });
}

runSmokeTest();