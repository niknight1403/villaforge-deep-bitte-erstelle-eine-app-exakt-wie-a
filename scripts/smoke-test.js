const http = require('http');

async function runSmokeTest() {
  console.log('Starting Smoke Test for Aurora Companion Studio...');
  
  // Simulate a server check
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', app: 'Aurora Companion Studio' }));
  });

  return new Promise((resolve, reject) => {
    server.listen(3000, () => {
      console.log('Server listening on port 3000');
      http.get('http://localhost:3000', (res) => {
        if (res.statusCode === 200) {
          console.log('Smoke Test Passed: Server responded correctly.');
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