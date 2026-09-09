import express from "express";
import routes from "./routes/index.js";

const server = express();
server.use(express.json());
server.use('/api', routes);

export default server;
