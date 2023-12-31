const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  fs.readFile(path.join(__dirname, '/index.html'), (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end(`Error loading index.html: ${err}`);
      return;
    }
    res.statusCode = 200;
    res.end(data);
  });
});

server.listen(8090, () => {
  console.log('Server is up and listening on port 8090');
});