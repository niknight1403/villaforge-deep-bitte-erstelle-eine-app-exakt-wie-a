const http = require('http');

const PORT = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('OK');
});

server.listen(PORT, () => {
  console.log('Smoke test: Server running, performing request...');
  http.get(`http://localhost:${PORT}`, (res) => {
    if (res.statusCode === 200) {
      console.log('Smoke test: SUCCESS');
      process.exit(0);
    } else {
      console.error('Smoke test: FAILED');
      process.exit(1);
    }
  }).on('error', (e) => {
    console.error('Smoke test: Connection error', e);
    process.exit(1);
  });
});