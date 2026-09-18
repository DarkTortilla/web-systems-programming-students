import type { Request, Response } from "express";
const products = [
  { id: 1, name: "" },
  { id: 2, name: "" },
  { id: 3, name: "" },
];

export class ProductsController {
  constructor() {}

  getProducts(_req:Request, res:Response) {
    res.json(products);
  }

  createProduct(req:Request, res:Response) {
    const id = req.body.id;
    const name = req.body.name;
    products.push({ id, name });

    res.status(201).json({ products, message: "ok" });
  }

  updateProduct(req:Request, res:Response) {
    const id = Number(req.params['id']);
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
