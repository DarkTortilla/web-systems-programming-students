import express from "express";
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




// server.put();
// server.patch();
// server.delete();

server.listen(3000, () => {
  console.log("server running on port 3000");
});
