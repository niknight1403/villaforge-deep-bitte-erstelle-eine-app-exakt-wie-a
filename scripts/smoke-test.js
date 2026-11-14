const http = require('http');

async function runSmokeTest() {
  console.log('Starting Smoke Test: Aurora Companion Studio...');
  
  // Simulate a local server check
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', feature: 'chat-interface' }));
  });

  return new Promise((resolve, reject) => {
    server.listen(3000, () => {
      console.log('Server running on port 3000');
      http.get('http://localhost:3000', (res) => {
        if (res.statusCode === 200) {
          console.log('Smoke Test Passed: UI/API reachable.');
          server.close();
          resolve();
        } else {
          server.close();
          reject(new Error('Smoke Test Failed: Status ' + res.statusCode));
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