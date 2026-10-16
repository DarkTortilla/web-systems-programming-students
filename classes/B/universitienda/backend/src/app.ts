import { Server } from "./server.ts";
import { AppRoutes } from "./routes/index.ts";
import dotenv from "dotenv";
import sequelizeConnection from "./conf/sequelize.connection.ts";

dotenv.config();
const port = Number(process.env["PORT"]);

async function main() {
  // ORM
  try {
    await sequelizeConnection.connect();
    const server = new Server({ port, routes: AppRoutes.router });
    server.start();
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

main();
