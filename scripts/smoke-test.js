const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET'
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  if (res.statusCode === 200 || res.statusCode === 404) {
    console.log('Smoke test passed: Server responded.');
    process.exit(0);
  } else {
    process.exit(1);
  }
});

req.on('error', (e) => {
  console.error(`Smoke test failed: ${e.message}`);
  process.exit(1);
});

req.end();