import { Server } from "./server.ts";
import sequelize from "./conf/sequilize.connection.ts";
import dotenv from "dotenv";
import routes from "./routes/index.ts";
dotenv.config();

const port = Number(process.env.PORT);

async function main() {
  try{
  await sequelize.sync({
  });
  const server = new Server({ port, routes });
  server.start();
}catch(e){
    console.log(e)
    process.exit(1)
}
}

main();
