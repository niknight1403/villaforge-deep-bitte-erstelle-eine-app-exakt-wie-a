const http = require('http');

const PORT = 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'ok', message: 'Smoke test passed' }));
});

server.listen(PORT, () => {
  console.log('Smoke test server running on port ' + PORT);
  process.exit(0);
});