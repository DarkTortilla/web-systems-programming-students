import express, { Router,type Express } from "express";
import cors from 'cors'
type serverOptions = {
  port: number;
  routes: Router;
  origin:string
};

export class Server {
  private readonly port: number;
  private readonly server: Express;
  private readonly routes: Router;
  private readonly origin: string
  constructor(options: serverOptions) {
    this.server = express();
    this.port = options.port;
    this.routes = options.routes;
    this.origin = options.origin
  }

  public start(){
    // middleware
    this.server.use(cors({origin: this.origin}))
    this.server.use(express.json());
    this.server.use("/api", this.routes);
    this.server.listen(this.port, () => {
      console.log(`server running on port: ${this.port}`);
    });
  };
}
