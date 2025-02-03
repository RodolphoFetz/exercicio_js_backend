const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Página não encontrada");
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
