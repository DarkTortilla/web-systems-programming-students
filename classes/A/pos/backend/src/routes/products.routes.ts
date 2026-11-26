import { Router } from "express";
import { ProductController } from "../controllers/products.controller.ts";
import { isAuthMiddleware } from "../middlewares/auth.ts";
import { paginationValidator } from "../validators/pagination.ts";
import { validate } from "../middlewares/validateData.ts";

export class ProductRoutes {
    static get router(): Router {
        const router = Router();
        const productController = new ProductController();

        router.get('/', isAuthMiddleware, paginationValidator, validate, productController.getProducts);
        router.get('/:id', productController.getProductById);
        router.post('/', productController.createProduct);
        router.put('/:id', productController.updateProductById);
        router.delete('/:id', productController.deleteProductById);

        return router;
    }
}

