import express from "express";
export class Server {
  port;
  server;
  routes;
  dataFormat;
  constructor(options) {
    this.server = express();
    this.port = options.port;
    this.routes = options.routes;
  }

  start = () => {
    server.use(express.json());
    server.use("/api", this.routes);
    server.listen(this.port, () => {
      console.log(`server running on port: ${this.port}`);
    });
  };
}
