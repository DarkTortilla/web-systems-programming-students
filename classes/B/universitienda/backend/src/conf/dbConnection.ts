import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const { DB_USER, DB_PORT, DB_HOST, DB_PASSWORD, DB_NAME } = process.env;

export const pool = mysql.createPool({
  user: DB_USER!,
  password: DB_PASSWORD!,
  database: DB_NAME!,
  host: DB_HOST!,
  port: Number(DB_PORT),
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});
