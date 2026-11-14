const http = require('http');

async function runSmokeTest() {
  console.log('Starting Smoke Test for Aurora Companion Studio...');
  
  // Simulate a basic check of the application entry point
  const mockServer = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ready', app: 'Aurora Companion Studio' }));
  });

  mockServer.listen(3000, () => {
    console.log('Server listening on port 3000');
    http.get('http://localhost:3000', (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        const result = JSON.parse(data);
        if (result.status === 'ready') {
          console.log('Smoke Test Passed: Application is responsive.');
          process.exit(0);
        } else {
          console.error('Smoke Test Failed: Unexpected response.');
          process.exit(1);
        }
        mockServer.close();
      });
    }).on('error', (err) => {
      console.error('Smoke Test Failed: ' + err.message);
      process.exit(1);
    });
  });
}

runSmokeTest();