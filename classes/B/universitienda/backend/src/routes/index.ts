import productRoutes from "./products.routes.ts";
import { Router } from "express";

const router = Router();

router.use('/products', productRoutes);

export default router;