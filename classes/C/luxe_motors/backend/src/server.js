import http from "http";
// 100
// 200-299 OK
// 300-399 redirecciones
// 400-499 error en el cliente
// 500-599 error en el servidor

export const server = http.createServer((req, res) => {
  console.log(req.url);
  switch (req.url) {
    case "/users":
      res.writeHead(200, "ok", { "content-type": "application/json" });
      res.end(JSON.stringify([{ name: "A" }, { name: "B" }, { name: "C" }]));
      break;
    case "/home":
     res.writeHead(200, "ok", { "content-type": "text/html" });
      res.end("<h1>Hola</h1>");
      break;
    default:
      res.statusCode = 404;
      res.end("not found");
      break;
  }
});

server.listen(3000, () => {
  console.log("server running on port: 3000");
});
