const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET'
};

const req = http.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  if (res.statusCode >= 200 && res.statusCode < 300) {
    console.log('Smoke Test Passed: App is reachable.');
    process.exit(0);
  } else {
    console.error('Smoke Test Failed: Unexpected status code.');
    process.exit(1);
  }
});

req.on('error', (e) => {
  console.error(`Smoke Test Failed: ${e.message}`);
  process.exit(1);
});

req.end();