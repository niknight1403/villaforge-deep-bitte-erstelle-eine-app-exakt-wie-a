const http = require('http');

const PORT = process.env.PORT || 3000;

async function runSmokeTest() {
  console.log('Starting smoke test...');
  return new Promise((resolve, reject) => {
    const req = http.get(`http://localhost:${PORT}/`, (res) => {
      if (res.statusCode === 200 || res.statusCode === 404) {
        console.log('Smoke test passed: Server responded.');
        resolve();
      } else {
        reject(new Error(`Server responded with status: ${res.statusCode}`));
      }
    });
    req.on('error', (err) => reject(err));
  });
}

runSmokeTest().catch((err) => {
  console.error('Smoke test failed:', err);
  process.exit(1);
});