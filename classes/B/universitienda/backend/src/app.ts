import { Server } from "./server.ts";
import routes from "./routes/index.ts";
import dotenv from "dotenv";
import sequelize from "./conf/sequelizeConnection.ts";

dotenv.config();
const port = Number(process.env["PORT"]);

async function main() {
  // ORM
  try {
    await sequelize.sync({});
    const server = new Server({ port, routes });
    server.start();
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

main();
