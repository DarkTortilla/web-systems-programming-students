import { Server } from "./server.ts";
import dotenv from "dotenv";
dotenv.config();

const port = Number(process.env.PORT);

function main() {
  if (!port) {
    console.log('port is required');
    process.exit(1);
  }
  const server = new Server({ port });
  server.start();
}

main();
