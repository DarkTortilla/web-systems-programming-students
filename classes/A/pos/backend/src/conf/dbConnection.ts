import mysql2 from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();
const { 
    DB_USER, 
    DB_PORT, 
    DB_HOST, 
    DB_PASSWORD, 
    DB_NAME } = process.env;

export const pool = mysql2.createPool({
  user: DB_USER!,
  password: DB_PASSWORD!,
  host: DB_HOST!,
  port: Number(DB_PORT),
  database: DB_NAME!,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});
