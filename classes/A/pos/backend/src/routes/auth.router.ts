import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.ts";
import { registerValidator, loginValidator } from "../validators/auth.ts";
import { validate } from "../middlewares/validateData.ts";


export class AuthRoutes {
    static get router(): Router {
        const router = Router();
        const authController = new AuthController();

        router.post('/register', registerValidator, validate, authController.register);
        router.post('/login', loginValidator, validate, authController.login);

        return router;
    }
}

