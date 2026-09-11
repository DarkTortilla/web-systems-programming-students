import { Router } from "express";
import { ProductController, getProducts } from "../controllers/products.controller.js";
import jwt from "jsonwebtoken"
import jose from "jose";

const router = Router();
const productController = new ProductController();

router.get('/', productController.getProducts);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProductById);

export default router;