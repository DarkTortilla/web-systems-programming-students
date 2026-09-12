import { Server } from "./server.js";
import dotenv from "dotenv";
import routes from "./routes/index.js";
dotenv.config();

const port = process.env.PORT;

function main() {
  const server = new Server({ port, routes });
  server.start();
}

main();
