const http = require('http');

const PORT = 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'ok', message: 'Smoke test passed' }));
});

server.listen(PORT, () => {
  console.log('Smoke test server running on port ' + PORT);
  // Simulate a request to the root
  http.get(`http://localhost:${PORT}/`, (res) => {
    if (res.statusCode === 200) {
      console.log('Smoke Test: SUCCESS');
      process.exit(0);
    } else {
      console.error('Smoke Test: FAILED');
      process.exit(1);
    }
  }).on('error', (e) => {
    console.error('Smoke Test: ERROR', e);
    process.exit(1);
  });
});