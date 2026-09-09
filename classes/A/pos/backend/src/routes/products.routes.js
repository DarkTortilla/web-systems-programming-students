import { Router } from "express";
import { ProductController } from "../controllers/products.controller.js";

const productController = new ProductController();
const router = Router();

router.get('/', productController.getProducts);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);

export default router;