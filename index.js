import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      data: 'Hello World!',
    })
  );
});

const PORT = 8002;
server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
