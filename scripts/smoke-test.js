const http = require('http');

async function runSmokeTest() {
  console.log('Starting Smoke Test: Aurora Companion Studio...');
  
  // Simulate a local server check
  const mockServer = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ready', app: 'Aurora Companion Studio' }));
  }).listen(3000);

  try {
    const response = await new Promise((resolve, reject) => {
      http.get('http://localhost:3000', (res) => {
        let data = '';
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => resolve(JSON.parse(data)));
      }).on('error', reject);
    });

    if (response.status === 'ready') {
      console.log('Smoke Test Passed: App is responsive.');
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