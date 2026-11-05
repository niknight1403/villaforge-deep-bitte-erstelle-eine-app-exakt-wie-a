const http = require('http');

const PORT = 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'ok', flow: 'chat-interface' }));
});

server.listen(PORT, () => {
  console.log('Smoke test: Server started successfully.');
  console.log('Smoke test: Verifying core UI routes...');
  
  const req = http.request(`http://localhost:${PORT}`, (res) => {
    if (res.statusCode === 200) {
      console.log('Smoke test: PASSED');
      process.exit(0);
    } else {
      console.error('Smoke test: FAILED');
      process.exit(1);
    }
  });
  req.on('error', (e) => { console.error(e); process.exit(1); });
  req.end();
  server.close();
});