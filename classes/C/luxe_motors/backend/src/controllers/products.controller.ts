import  type { Request, Response } from "express";
import { Product } from "../models/index.ts";

export class ProductController {
  public async getProducts(_req: Request, res: Response) {
    try {
      const products = await Product.findAll( );
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  }

  public async getProductById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({ message: "product not found" });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  }

  public async createProduct(req: Request, res: Response) {
    try {
      const product = await Product.create(req.body);
      res.status(201).json({ message: "product created", product });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  }

  public async updateProductById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({ message: "product not found" });
      }

      product.set(req.body);
      await product.save();
      res.status(200).json({ message: "product updated", product });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  }

  public async deleteProductById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({ message: "product not found" });
      }

      product.isActive = false;
      await product.save();
      res.status(200).json({ message: "product deleted" });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  }
}
