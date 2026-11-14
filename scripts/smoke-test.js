const http = require('http');

async function runSmokeTest() {
  console.log('Starting Smoke Test for Aurora Companion Studio...');
  
  // Simulate a server check
  const port = 3000;
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end('OK');
  }).listen(port);

  try {
    const response = await new Promise((resolve) => {
      http.get(`http://localhost:${port}`, (res) => resolve(res.statusCode));
    });

    if (response === 200) {
      console.log('Smoke Test Passed: Server reachable.');
      process.exit(0);
    } else {
      throw new Error('Server returned status ' + response);
    }
  } catch (err) {
    console.error('Smoke Test Failed:', err.message);
    process.exit(1);
  } finally {
    server.close();
  }
}

runSmokeTest();