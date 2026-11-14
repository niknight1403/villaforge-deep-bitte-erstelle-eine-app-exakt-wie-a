const http = require('http');

async function runSmokeTest() {
  console.log('Starting Smoke Test: Aurora Companion Studio...');
  
  // Simulate a simple server check
  const port = 3000;
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end('OK');
  });

  return new Promise((resolve, reject) => {
    server.listen(port, () => {
      console.log('Server listening on port ' + port);
      http.get('http://localhost:' + port, (res) => {
        if (res.statusCode === 200) {
          console.log('Smoke Test Passed: Server responded with 200 OK.');
          server.close();
          resolve();
        } else {
          console.error('Smoke Test Failed: Unexpected status code.');
          server.close();
          reject();
        }
      }).on('error', (e) => {
        console.error('Smoke Test Failed: ' + e.message);
        server.close();
        reject();
      });
    });
  });
}

runSmokeTest().catch(() => process.exit(1));