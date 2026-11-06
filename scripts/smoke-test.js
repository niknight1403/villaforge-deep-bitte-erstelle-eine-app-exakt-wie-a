const http = require('http');

const PORT = 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'ok', flow: 'chat-interface' }));
});

server.listen(PORT, () => {
  console.log('Smoke test server running on port ' + PORT);
  const options = { hostname: 'localhost', port: PORT, path: '/', method: 'GET' };
  const req = http.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      const result = JSON.parse(data);
      if (result.status === 'ok') {
        console.log('Smoke test passed: UI flow reachable.');
        process.exit(0);
      } else {
        console.error('Smoke test failed: Invalid response.');
        process.exit(1);
      }
    });
  });
  req.on('error', (e) => { console.error(e); process.exit(1); });
  req.end();
});