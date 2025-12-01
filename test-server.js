import http from "node:http";

// Crée un serveur HTTP simple
const server = http.createServer((req, res) => {
  res.end("Server OK");
});

// Écoute le port 5175 sur 127.0.0.1
server.listen(5175, "127.0.0.1", () => {
  console.log("Server OK on 127.0.0.1:5175");
});
