import server from './server.js';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT;
server.listen(port,()=>{
    console.log(`server running on port ${port}`);
});