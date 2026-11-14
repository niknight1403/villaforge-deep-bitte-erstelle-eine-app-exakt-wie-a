const http = require('http');

async function runSmokeTest() {
  console.log('Starting Smoke Test: Aurora Companion Studio...');
  
  // Simulate a local server check
  const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('OK');
  }).listen(3000);

  try {
    const response = await new Promise((resolve) => {
      http.get('http://localhost:3000', (res) => {
        resolve(res.statusCode === 200);
      }).on('error', () => resolve(false));
    });

    if (response) {
      console.log('Smoke Test Passed: Server reachable.');
      process.exit(0);
    } else {
      throw new Error('Server connectivity failed.');
    }
  } catch (err) {
    console.error('Smoke Test Failed:', err.message);
    process.exit(1);
  } finally {
    server.close();
  }
}

runSmokeTest();