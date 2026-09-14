import express, { Router, Express } from "express";

type serverOptions = {
  port: number;
  routes: Router;
};

export class Server {
  private readonly port: number;
  private readonly server: Express;
  private readonly routes: Router;
  constructor(options: serverOptions) {
    this.server = express();
    this.port = options.port;
    this.routes = options.routes;
  }

  public start = () => {
    this.server.use(express.json());
    this.server.use("/api", this.routes);
    this.server.listen(this.port, () => {
      console.log(`server running on port: ${this.port}`);
    });
  };
}
