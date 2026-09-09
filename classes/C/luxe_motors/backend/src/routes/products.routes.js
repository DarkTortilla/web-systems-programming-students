import { Router } from "express";
import { ProductController } from "../controllers/products.controller.js";

const router = Router();
const productController = new ProductController();

router.get('/', productController.getProducts);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProductById);

export default router;