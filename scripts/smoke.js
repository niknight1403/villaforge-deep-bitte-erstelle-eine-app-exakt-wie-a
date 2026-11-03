const http = require('http');
const fs = require('fs');
const path = require('path');

const seite = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(seite);
});

server.listen(0, '127.0.0.1', () => {
  const port = server.address().port;
  http.get('http://127.0.0.1:' + port + '/', (res) => {
    let body = '';
    res.on('data', (c) => (body += c));
    res.on('end', () => {
      server.close();
      if (res.statusCode !== 200) {
        console.error('smoke: Status ' + res.statusCode);
        process.exit(1);
      }
      if (!body.includes('MyBabes AI')) {
        console.error('smoke: Produktmarker fehlt');
        process.exit(1);
      }
      console.log('smoke: HTTP 200, ' + body.length + ' Bytes ausgeliefert');
    });
  }).on('error', (e) => {
    server.close();
    console.error('smoke: Verbindungsfehler ' + e.message);
    process.exit(1);
  });
});
