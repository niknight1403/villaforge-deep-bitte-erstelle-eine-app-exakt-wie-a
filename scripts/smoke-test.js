const http = require('http');

const PORT = 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'ok', message: 'Smoke test passed' }));
});

server.listen(PORT, () => {
  console.log('Smoke test server running...');
  http.get(`http://localhost:${PORT}`, (res) => {
    if (res.statusCode === 200) {
      console.log('Smoke test successful: UI/API reachable.');
      process.exit(0);
    } else {
      console.error('Smoke test failed: Status code', res.statusCode);
      process.exit(1);
    }
  }).on('error', (e) => {
    console.error('Smoke test error:', e.message);
    process.exit(1);
  });
});