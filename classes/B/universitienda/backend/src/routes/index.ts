import productRoutes from "./products.routes.ts";
import userRoutes from "./user.routes.ts";
import { Router } from "express";

const router = Router();

router.use("/products", productRoutes);
router.use("/users", userRoutes);

export default router;