const products = [
  { id: 1, name: "" },
  { id: 2, name: "" },
  { id: 3, name: "" },
];

export class ProductsController {
  constructor() {}

  getProducts(req, res) {
    res.json(products);
  }

  createProduct(req, res) {
    const id = req.body.id;
    const name = req.body.name;
    products.push({ id, name });

    res.status(201).json({ products, message: "ok" });
  }

  updateProduct(req, res) {
    const id = Number(req.params.id);
    const name = req.body.name;
    const product = products.find((p) => p.id === id);
    if (!product) {
      res.status(404).json({ message: "product not found" });
      return;
    }
    product.name = name;
    res.status(200).json({ message: "product updated" });
  }
}
