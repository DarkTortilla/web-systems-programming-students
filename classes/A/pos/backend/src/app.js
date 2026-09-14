import { Server } from "./server.ts";
import dotenv from "dotenv";
import routes from "./routes/index.js";
dotenv.config();

const port = process.env.PORT;

function main() {
  const server = new Server({ port, routes });
  server.
  server.start();
}

main();
