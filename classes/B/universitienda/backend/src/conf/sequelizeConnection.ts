import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const { DB_USER, DB_HOST, DB_PASSWORD, DB_NAME, NODE_ENVIRONMENT } = process.env;


const sequelize = new Sequelize(DB_NAME!, DB_USER!,DB_PASSWORD, {
  host: DB_HOST!,
  dialect: 'mysql',
  logging: NODE_ENVIRONMENT ==='dev' ? console.log : false
});

export default sequelize;