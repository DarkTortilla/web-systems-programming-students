import express from "express";
import routes from "./routes/index.js";

export class Server{
    port;
    server = express();
    constructor(options){
        this.port = options.port;
        this.server.use(express.json());
        this.server.use('/api', routes);
    }

    start(){
        server.listen(this.port, ()=>{
            console.log(`server running on port: ${this.port}`);
        });
    }
}


export default server;
