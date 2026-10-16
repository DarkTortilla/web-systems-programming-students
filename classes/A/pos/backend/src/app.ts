import { Server } from "./server.ts";
import sequelizeConnection from "./conf/sequelize.connection.ts";
import dotenv from "dotenv";
import routes from "./routes/index.ts";
dotenv.config();

const port = Number(process.env.PORT);

async function main() {
  try{
  await sequelizeConnection.connect();
  const server = new Server({ port, routes });
  server.start();
}catch(e){
    console.log(e)
    process.exit(1)
}
}

main();
