import { Server } from "./server.ts";
import { AppRoutes } from "./routes/index.ts";
//import sequelizeConnection from "./conf/sequelize.connection.ts";
import dotenv from "dotenv";
dotenv.config();

const port = Number(process.env.PORT);

async function main() {
  try {
    // await sequelizeConnection.connect();
    const server = new Server({ port, routes: AppRoutes.router });
    server.start();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();
