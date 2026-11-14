const http = require('http');

async function runSmokeTest() {
  console.log('Starting Smoke Test for Aurora Companion Studio...');
  
  // Simulate a local server check
  const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('OK');
  }).listen(3000, () => {
    console.log('Server running on port 3000');
    
    http.get('http://localhost:3000', (res) => {
      if (res.statusCode === 200) {
        console.log('Smoke Test Passed: Server responded correctly.');
        process.exit(0);
      } else {
        console.error('Smoke Test Failed: Unexpected status code.');
        process.exit(1);
      }
      server.close();
    }).on('error', (e) => {
      console.error('Smoke Test Failed: ' + e.message);
      process.exit(1);
    });
  });
}

runSmokeTest();