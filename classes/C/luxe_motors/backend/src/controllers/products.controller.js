const products = [
  { id: 1, name: "" },
  { id: 2, name: "" },
  { id: 3, name: "" },
];

export class ProductController {
  constructor() {}

  getProducts(req, res) {
    res.status(200).json(products);
  }

  createProduct(req, res) {
    const name = req.body.name;
    const id = req.body.id;
    const product = {
      id,
      name,
    };
    products.push(product);
    res.status(201).json({ product, message: "ok" });
  }

  updateProductById(req, res) {
    const id = +req.params.id;
    const name = req.body.name;
    const product = products.find((p) => p.id === id);

    if (!product) {
      res.status(404).json({ message: "product not found" });
      return;
    }
    if (!id || !name) {
      res.status(400).json({ message: "name is required" });
      return;
    }
    product.name = name;
    res.status(200).json({ message: "product updated" });
  }
}
