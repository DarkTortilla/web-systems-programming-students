import { Router } from "express";
import { UserController } from "../controllers/user.controller.ts";
import { createUserValidator } from "../validators/user.ts";
import { validate } from "../middlewares/validateData.ts";
const userController = new UserController();

export class UserRoutes {
    static get router(): Router {
        const router = Router();

        router.get('/:id', userController.getUserById);
        router.get('/', userController.getAllUsers);
        router.post('/',createUserValidator, validate, userController.createUser);
        router.put('/:id', userController.updateUser);
        router.delete('/:id', userController.deleteUser);

        return router;
    }
}   

