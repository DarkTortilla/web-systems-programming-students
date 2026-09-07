//SOLID

import http from 'http';
const users =[{name: 'A'}, {name:'B'}, {name:'C'}]; 


const server = http.createServer((req, res)=>{
    if(req.url ==='/users'){

        res.writeHead(200, 'ok', {"content-type":"application/json"});
        res.end(JSON.stringify(users));
    }
    else if(req.url ==='/home'){
        res.writeHead(200, 'ok', {"content-type":"text/html"});
        res.end(`<h1>Home page</h1>
                <p> welcome ${users[0].name} </p> 
            `) //SSR
    }else{
        res.statusCode=404;
        res.end('not found');
    }
});

server.listen(3000,()=>{
    console.log('server is running on port: 3000');
} )

