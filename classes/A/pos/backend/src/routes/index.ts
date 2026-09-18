import { Router } from "express";
import productsRoutes from './products.routes.ts';
import userRoutes from './user.routes.ts';
const router = Router();

router.use('/v1/products', productsRoutes);
router.use('/v1/users', userRoutes);

export default router;