import { Server } from "./server.ts";
import dotenv from "dotenv";
import routes from "./routes/index.ts";
dotenv.config();

const port = Number(process.env.PORT);

function main() {
  const server = new Server({ port, routes });
  server.start();
}

main();
