import express from "express";

export class Server {
  server = express();


  port;
  routes;
  constructor(options) {
    this.port = options.port;
    this.routes = options.routes;
    
  }
  
  start() {
    this.server.use('/api/v1', this.routes);
    this.server.listen(this.port, () => {
      console.log(`server running on port: ${this.port}`);
    });
  }
}
