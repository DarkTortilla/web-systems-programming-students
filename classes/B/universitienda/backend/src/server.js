import express from "express";

export class Server {
  server = express();

  port;
  constructor(options) {
    this.port = options.port;
  }
  
  start() {
    this.server.listen(this.port, () => {
      console.log(`server running on port: ${this.port}`);
    });
  }
}
