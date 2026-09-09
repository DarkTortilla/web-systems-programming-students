import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT;

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

server.put('/products/:id', (req, res)=>{
   const id = Number(req.params.id);
   const name = req.body.name;

   const product = products.find(p=>p.id===id);
   if (!product) {
        res.status(404).json({message:'product not found'});
        return;
   }

   product.name=name;
   res.status(200).json({message:"product updated"});
   
});

server.listen(port, ()=>{
    console.log(`server running on port: ${port}`);
});