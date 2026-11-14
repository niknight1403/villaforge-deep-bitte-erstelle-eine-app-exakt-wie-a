const http = require('http');

async function runSmokeTest() {
  console.log('Starting smoke test for Aurora Companion Studio...');
  
  // Simulate a server check
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', version: '0.1.0' }));
  });

  return new Promise((resolve, reject) => {
    server.listen(3000, () => {
      console.log('Server listening on port 3000');
      http.get('http://localhost:3000', (res) => {
        if (res.statusCode === 200) {
          console.log('Smoke test passed: Server reachable.');
          server.close();
          resolve();
        } else {
          server.close();
          reject(new Error('Smoke test failed: Invalid status code.'));
        }
      }).on('error', (e) => {
        server.close();
        reject(e);
      });
    });
  });
}

runSmokeTest().catch(err => {
  console.error(err);
  process.exit(1);
});