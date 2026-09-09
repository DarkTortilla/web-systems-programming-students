import express from "express";
import dotenv from "dotenv"

dotenv.config();
const port = process.env.PORT;

const products = [
  { id: 1, name: "" },
  { id: 2, name: "" },
  { id: 3, name: "" },
];

const server = express();

server.use(express.json());

server.get("/products", (req, res) => {
  res.status(200).json(products);
});
server.post("/products", (req, res) => {
  const name = req.body.name;
  const id = req.body.id;
  const product = {
    id,
    name,
  };
  products.push(product);
  res.status(201).json({ product, message: "ok" });
});

server.put('/products/:id', (req, res)=>{
  const id = +req.params.id;
  const name = req.body.name;
  console.log(id,1);
  const product = products.find(p=>p.id===id);

  if (!product) {
    res.status(404).json({message: 'product not found'});
    return;
  }
  if(!id || !name){
    res.status(400).json({message:'name is required'});
    return;
  } 

  product.name=name;

  res.status(200).json({message:'product updated'});

});
// server.patch();
// server.delete();

server.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
