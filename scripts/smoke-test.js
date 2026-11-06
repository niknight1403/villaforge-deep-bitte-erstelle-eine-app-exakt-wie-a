const http = require('http');

const PORT = process.env.PORT || 3000;

async function runSmokeTest() {
  console.log('Starting smoke test...');
  try {
    const response = await new Promise((resolve, reject) => {
      const req = http.get(`http://localhost:${PORT}`, (res) => {
        resolve(res.statusCode);
      });
      req.on('error', (e) => reject(e));
      req.end();
    });

    if (response === 200 || response === 404) {
      console.log('Smoke test passed: Server reachable.');
      process.exit(0);
    } else {
      console.error('Smoke test failed: Unexpected status code', response);
      process.exit(1);
    }
  } catch (err) {
    console.error('Smoke test failed: Server not running.', err.message);
    process.exit(1);
  }
}

runSmokeTest();