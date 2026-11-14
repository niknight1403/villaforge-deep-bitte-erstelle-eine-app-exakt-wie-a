const http = require('http');

async function runSmokeTest() {
  console.log('Starting Smoke Test for Aurora Companion Studio...');
  
  // Simulating a basic server check
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end('OK');
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
          reject(new Error('Server returned status code ' + res.statusCode));
        }
      }).on('error', (e) => {
        server.close();
        reject(e);
      });
    });
  });
}

runSmokeTest().catch(err => {
  console.error('Smoke Test Failed:', err);
  process.exit(1);
});