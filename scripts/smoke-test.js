const http = require('http');

const PORT = process.env.PORT || 3000;

async function runSmokeTest() {
  console.log('Starting smoke test...');
  return new Promise((resolve, reject) => {
    const req = http.get(`http://localhost:${PORT}/`, (res) => {
      if (res.statusCode === 200) {
        console.log('Smoke test passed: Server is reachable.');
        resolve();
      } else {
        console.error(`Smoke test failed: Status code ${res.statusCode}`);
        reject();
      }
    });
    req.on('error', (err) => {
      console.error('Smoke test failed: Could not connect to server.', err);
      reject(err);
    });
  });
}

runSmokeTest().catch(() => process.exit(1));