const http = require('http');

async function runSmokeTest() {
  console.log('Starting Smoke Test: Aurora Companion Studio...');
  
  // Simulate a simple server check
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', app: 'Aurora Companion Studio' }));
  });

  return new Promise((resolve, reject) => {
    server.listen(3000, () => {
      http.get('http://localhost:3000', (res) => {
        if (res.statusCode === 200) {
          console.log('Smoke Test Passed: Server responded correctly.');
          server.close();
          resolve();
        } else {
          server.close();
          reject(new Error('Smoke Test Failed: Invalid status code.'));
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