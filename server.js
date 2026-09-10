const http = require('http');

const PORT = 8080;


const server = http.createServer((req, res) => {
  
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Servidor do Laboratório Ativo!');
  } else if (req.url === '/status') {
    res.statusCode = 200;
    res.end('Sistemas operando normalmente.');
  } else {
    res.statusCode = 404;
    res.end('Página não encontrada.');
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
