const http = require('http');

const PORT = 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'ok', message: 'Aurora Companion Studio API active' }));
});

server.listen(PORT, () => {
  console.log('Smoke test: Server started on port ' + PORT);
  const req = http.get(`http://localhost:${PORT}`, (res) => {
    if (res.statusCode === 200) {
      console.log('Smoke test: PASSED');
      process.exit(0);
    } else {
      console.error('Smoke test: FAILED');
      process.exit(1);
    }
  });
  req.on('error', () => { console.error('Smoke test: Connection error'); process.exit(1); });
});