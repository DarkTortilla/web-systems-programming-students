import { Router } from "express";
import {ProductRoutes} from "./products.routes.ts";
import {UserRoutes} from "./user.routes.ts";

export class AppRoutes {
    static get router(): Router {
        const router = Router();
        router.use("/products", ProductRoutes.router);
        router.use("/users", UserRoutes.router);
        return router;
    }
}
