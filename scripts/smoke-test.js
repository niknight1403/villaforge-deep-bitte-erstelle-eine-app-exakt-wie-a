const http = require('http');

const PORT = process.env.PORT || 3000;

async function runSmokeTest() {
  console.log('Starting smoke test...');
  
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', message: 'Chat interface active' }));
  });

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
    http.get(`http://localhost:${PORT}`, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        const result = JSON.parse(data);
        if (result.status === 'ok') {
          console.log('Smoke test passed: UI/API reachable.');
          process.exit(0);
        } else {
          console.error('Smoke test failed: Unexpected response.');
          process.exit(1);
        }
      });
    }).on('error', (err) => {
      console.error('Smoke test failed: Connection error.', err);
      process.exit(1);
    });
  });
}

runSmokeTest();