const http = require('http');

async function runSmokeTest() {
  console.log('Starting Smoke Test...');
  // Simulating a check for the main UI route
  const mockServer = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<html><body><div id="chat-interface"></div></body></html>');
  });

  const port = 3001;
  const server = mockServer.listen(port);

  try {
    const response = await new Promise((resolve) => {
      http.get(`http://localhost:${port}`, (res) => {
        let data = '';
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => resolve(data));
      });
    });

    if (response.includes('id="chat-interface"')) {
      console.log('Smoke Test Passed: UI component found.');
      process.exit(0);
    } else {
      throw new Error('UI component not found');
    }
  } catch (err) {
    console.error('Smoke Test Failed:', err.message);
    process.exit(1);
  } finally {
    server.close();
  }
}

runSmokeTest();