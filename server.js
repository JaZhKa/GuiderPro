const http = require('http');
const data = require('./db.json');
const PORT = 9000;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
  } else if (req.url === '/') {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(data));
    res.end();
  } else {
    res.statusCode = 404;
    res.write('Not Found!');
    res.end();
  }
});

server.listen(PORT);
console.log(`Server is running on PORT: ${PORT}`);
