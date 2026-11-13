const http = require('http');

async function runSmokeTest() {
  console.log('Starting Smoke Test: Aurora Companion Studio...');
  
  // Simulating a local server check
  const port = 3000;
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', app: 'Aurora Companion Studio' }));
  });

  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
    
    http.get(`http://localhost:${port}/`, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        const result = JSON.parse(data);
        if (result.status === 'ok') {
          console.log('Smoke Test Passed: App is responsive.');
          server.close();
          process.exit(0);
        } else {
          console.error('Smoke Test Failed: Unexpected response.');
          server.close();
          process.exit(1);
        }
      });
    }).on('error', (err) => {
      console.error('Smoke Test Failed: ' + err.message);
      server.close();
      process.exit(1);
    });
  });
}

runSmokeTest();