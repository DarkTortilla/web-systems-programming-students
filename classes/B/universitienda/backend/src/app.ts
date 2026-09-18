import { Server } from "./server.ts";
import routes from "./routes/index.ts";
import dotenv from 'dotenv';

dotenv.config();
const port = Number(process.env['PORT']);

function main(){
   const server = new Server({port, routes});
   server.start();
}

main();
