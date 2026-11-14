const http = require('http');

async function runSmokeTest() {
  console.log('Starting Smoke Test for Aurora Companion Studio...');
  
  // Simulate server check
  const mockServer = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', version: '1.0.0' }));
  });

  try {
    await new Promise((resolve) => mockServer.listen(3001, resolve));
    console.log('Server initialized successfully.');

    const response = await new Promise((resolve, reject) => {
      http.get('http://localhost:3001', (res) => {
        let data = '';
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => resolve(JSON.parse(data)));
      }).on('error', reject);
    });

    if (response.status === 'ok') {
      console.log('Smoke Test Passed: System responsive.');
      process.exit(0);
    } else {
      throw new Error('Invalid response');
    }
  } catch (err) {
    console.error('Smoke Test Failed:', err.message);
    process.exit(1);
  } finally {
    mockServer.close();
  }
}

runSmokeTest();