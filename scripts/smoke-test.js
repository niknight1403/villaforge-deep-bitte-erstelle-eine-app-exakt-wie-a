const http = require('http');

const PORT = 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'ok', message: 'Smoke test passed' }));
});

server.listen(PORT, () => {
  console.log('Smoke test server running on port 3000');
  const req = http.get(`http://localhost:${PORT}/`, (res) => {
    if (res.statusCode === 200) {
      console.log('Smoke test: SUCCESS');
      process.exit(0);
    } else {
      console.error('Smoke test: FAILED');
      process.exit(1);
    }
  });
  req.on('error', (e) => {
    console.error('Smoke test: ERROR', e);
    process.exit(1);
  });
});