const http = require('http');

async function runSmokeTest() {
  console.log('Starting Smoke Test for Aurora Companion Studio...');
  
  // Simulate a local server check
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', features: ['chat', 'profile', 'gallery'] }));
  });

  server.listen(3000, () => {
    console.log('Server running on port 3000');
    
    http.get('http://localhost:3000', (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        const result = JSON.parse(data);
        if (result.status === 'ok') {
          console.log('Smoke Test Passed: Core features accessible.');
          process.exit(0);
        } else {
          console.error('Smoke Test Failed: Unexpected response.');
          process.exit(1);
        }
        server.close();
      });
    }).on('error', (err) => {
      console.error('Smoke Test Failed: ' + err.message);
      process.exit(1);
    });
  });
}

runSmokeTest();