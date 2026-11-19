import express, { Router } from "express";
import cors from 'cors'

interface serverOptions{
  port:number,
  routes:Router,
  origin:string
}

export class Server {
  server = express();

  private readonly port: number;
  private readonly routes: Router;
  private readonly origin: string;
  constructor(options:serverOptions) {
    this.port = options.port;
    this.routes = options.routes;
    this.origin = options.origin;
    
  }
  
  start() {
    this.server.use(express.json());
    this.server.use(cors({origin:this.origin}))
    this.server.use('/api/v1', this.routes);
    this.server.listen(this.port, () => {
      console.log(`server running on port: ${this.port}`);
    });
  }
}
