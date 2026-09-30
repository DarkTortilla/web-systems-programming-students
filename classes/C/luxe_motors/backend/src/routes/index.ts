import { Router } from "express";
import productRoutes from './products.routes.ts';
import userRoutes from './user.routes.ts';

const router = Router();

router.use('/v1/products', productRoutes);
router.use('/v1/users', userRoutes);

export default router;


