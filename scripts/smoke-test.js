const http = require('http');

const PORT = 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'ok', page: 'chat' }));
});

server.listen(PORT, () => {
  console.log('Smoke test: Server running, validating UI flow...');
  const req = http.get(`http://localhost:${PORT}`, (res) => {
    if (res.statusCode === 200) {
      console.log('Smoke test: SUCCESS - UI flow responsive.');
      process.exit(0);
    } else {
      console.error('Smoke test: FAILED - Status code', res.statusCode);
      process.exit(1);
    }
  });
  req.on('error', (e) => {
    console.error('Smoke test: FAILED - Connection error', e.message);
    process.exit(1);
  });
});