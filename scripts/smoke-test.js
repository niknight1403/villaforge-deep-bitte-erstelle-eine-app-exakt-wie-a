const http = require('http');

const PORT = process.env.PORT || 3000;

console.log('Starting smoke test...');

const req = http.request(`http://localhost:${PORT}`, (res) => {
  if (res.statusCode >= 200 && res.statusCode < 300) {
    console.log('Smoke test passed: Server reachable.');
    process.exit(0);
  } else {
    console.error(`Smoke test failed: Status code ${res.statusCode}`);
    process.exit(1);
  }
});

req.on('error', (err) => {
  console.error('Smoke test failed: Could not connect to server.', err.message);
  process.exit(1);
});

req.end();