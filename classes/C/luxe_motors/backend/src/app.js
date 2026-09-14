import { Server } from "./server.ts";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

function main() {
  const server = new Server({ port });
  server.start();
}

main();
