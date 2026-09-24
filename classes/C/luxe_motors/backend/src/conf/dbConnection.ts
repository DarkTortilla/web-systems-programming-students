import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST!,
  user: process.env.DB_USER!,
  database: process.env.DB_NAME!,
  password: process.env.DB_PASSWORD!,
  port: Number(process.env.DB_PORT!),
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000, 
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

export default pool;