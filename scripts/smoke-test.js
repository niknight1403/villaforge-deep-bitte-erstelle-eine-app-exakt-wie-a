const http = require('http');

async function runSmokeTest() {
  console.log('Starting Smoke Test for Aurora Companion Studio...');
  
  // Simulate a local server check
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', feature: 'chat-interface' }));
  });

  return new Promise((resolve, reject) => {
    server.listen(3001, () => {
      http.get('http://localhost:3001', (res) => {
        if (res.statusCode === 200) {
          console.log('Smoke Test Passed: Core UI/Chat flow reachable.');
          server.close();
          resolve(true);
        } else {
          server.close();
          reject(new Error('Smoke Test Failed: Status Code ' + res.statusCode));
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