import express, { Router } from "express";
import routes from "./routes/index.ts";

// type serverOptions = {
//     port: number;
// }
interface serverOptions {
    port: number;
}
interface serverOptions {
    routes?: Router;
}

export class Server{
    private readonly port:number;
    private readonly server = express();
    constructor(options: serverOptions){
        this.port = options.port;
        this.server.use(express.json());
        this.server.use('/api', routes);
    }

    start(){
        this.server.listen(this.port, ()=>{
            console.log(`server running on port: ${this.port}`);
        });
    }
}
