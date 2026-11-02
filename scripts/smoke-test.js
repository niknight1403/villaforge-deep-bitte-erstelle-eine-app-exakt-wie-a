const http = require('http');

const PORT = 3000;
const options = {
  hostname: 'localhost',
  port: PORT,
  path: '/',
  method: 'GET',
};

const req = http.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  if (res.statusCode === 200 || res.statusCode === 404) {
    console.log('Smoke test passed: Server reachable.');
    process.exit(0);
  } else {
    console.error('Smoke test failed: Unexpected status code.');
    process.exit(1);
  }
});

req.on('error', (e) => {
  console.error(`Smoke test failed: ${e.message}`);
  process.exit(1);
});

req.end();