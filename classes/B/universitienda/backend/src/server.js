import express from 'express';
const products = [
  { id: 1, name: "" },
  { id: 2, name: "" },
  { id: 3, name: "" },
];
const server = express();
server.use(express.json());

server.get('/products', (req, res)=>{
    res.json(products);
});

server.post('/products', (req, res)=>{
    const id = req.body.id;
    const name = req.body.name;

    products.push({id, name});

    res.status(201).json({products, message:'ok'});
});

server.listen(3000, ()=>{
    console.log('server running on port 3000');
})