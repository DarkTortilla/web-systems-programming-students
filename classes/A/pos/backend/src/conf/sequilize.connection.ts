import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const { 
    DB_USER, 
    DB_HOST, 
    DB_PASSWORD, 
    DB_NAME,
    ENVIRONMENT,
 } = process.env;

const sequelize = new Sequelize(DB_NAME!, DB_USER!, DB_PASSWORD!, {
  host: DB_HOST!,
  logging: ENVIRONMENT === 'PRODUCTION' ? false : console.log,
  dialect: 'mysql'
});

export default sequelize;