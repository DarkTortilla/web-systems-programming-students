import express, { Router } from "express";

interface serverOptions{
  port:number,
  routes:Router
}

export class Server {
  server = express();

  private readonly port: number;
  private readonly routes: Router;
  constructor(options:serverOptions) {
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
