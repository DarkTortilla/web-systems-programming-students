import { ProductsController } from "../controllers/products.controller.js";
import { Router } from "express";

const router = Router();
const productsController = new ProductsController();

router.get('/', productsController.getProducts);
router.post('/', productsController.createProduct);
router.put('/:id', productsController.updateProduct);

export default router;
