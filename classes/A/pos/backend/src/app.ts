import { Server } from "./server.ts";
import sequelizeConnection from "./conf/sequelize.connection.ts";
import dotenv from "dotenv";
import { AppRoutes } from "./routes/index.ts";
dotenv.config();

const port = Number(process.env.PORT);
const origin = String(process.env.ALLOW_ORIGIN)

async function main() {
  try{
  await sequelizeConnection.connect();
  const server = new Server({ port, routes: AppRoutes.router, origin });
  server.start();
}catch(e){
    console.log(e)
    process.exit(1)
}
}

main();
