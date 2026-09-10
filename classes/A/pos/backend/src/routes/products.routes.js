import { Router } from "express";
import { ProductController } from "../controllers/products.controller.js";

const productController = new ProductController();
const router = Router();

function requireAuth(req, res, next) {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey || apiKey !== process.env.API_KEY) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
}

router.get('/', requireAuth, productController.getProducts);
router.post('/', requireAuth, productController.createProduct);
router.put('/:id', requireAuth, productController.updateProduct);

export default router;