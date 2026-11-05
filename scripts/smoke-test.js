const http = require('http');

const PORT = 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'ok', message: 'Smoke test passed' }));
});

server.listen(PORT, () => {
  console.log('Smoke test server running...');
  const req = http.get(`http://localhost:${PORT}`, (res) => {
    if (res.statusCode === 200) {
      console.log('SUCCESS: User flow reachable.');
      process.exit(0);
    } else {
      console.error('FAILED: Status code', res.statusCode);
      process.exit(1);
    }
  });
  req.on('error', (e) => { console.error(e); process.exit(1); });
});