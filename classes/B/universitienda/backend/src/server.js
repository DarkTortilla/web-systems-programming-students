//const http = require('http');
import http from 'http';
const users =[{name: 'A'}, {name:'B'}, {name:'C'}]; 
//fs

const server = http.createServer((req, res)=>{
    console.log(req.url)
    if (req.url==='/home' && req.method ==='GET') {
        res.writeHead(200,'ok', {"content-type":"text/html"});
        //SSR
        res.end(`
                <h1>Welcome</h1>
                <p>${req.url}</p>
            `);
    }else if (req.url === '/users') {
        res.writeHead(200, 'ok', { "content-type":"application/json"});
        res.end(JSON.stringify(users));
    }
    else{
        res.statusCode=404;
        res.end('not found');
    }

});

server.listen(3000, ()=>{
    console.log("server running on port 3000");
});