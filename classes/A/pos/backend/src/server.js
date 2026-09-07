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
server.post('/products',(req, res)=>{
    const id = req.body.id;
    const name = req.body.name;
    const product = {id, name}
    products.push(product);
    res.status(201).json({product,message:"ok" })
});



server.listen(3000, ()=>{
    console.log('server is running on port 3000');
})