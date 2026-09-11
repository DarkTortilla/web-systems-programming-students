import productRoutes from "./products.routes.js";
import { Router } from "express";

const router = Router();

router.use('/products', productRoutes);

export default router;