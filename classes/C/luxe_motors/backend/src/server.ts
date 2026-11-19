import express, { Router } from "express";
import cors from 'cors'


// type serverOptions = {
//     port: number;
// }
interface serverOptions {
    port: number;
}
interface serverOptions {
    routes: Router;
    origin: string
}

export class Server{
    private readonly port:number;
    private readonly server = express();
    private readonly origin:string
    constructor(options: serverOptions){
        this.port = options.port;
        this.origin = options.origin;
        this.server.use(express.json());
        this.server.use(cors({origin: this.origin}));
        this.server.use('/api',options.routes);
    }

    start(){
        this.server.listen(this.port, ()=>{
            console.log(`server running on port: ${this.port}`);
        });
    }
}
