import { Router } from "express";
import { UserController } from "../controllers/user.controller.ts";
const userController = new UserController();

export class UserRoutes {
    static get router(): Router {
        const router = Router();

        router.get('/:id', userController.getUserById);
        router.get('/', userController.getAllUsers);
        router.post('/', userController.createUser);
        router.put('/:id', userController.updateUser);
        router.delete('/:id', userController.deleteUser);

        return router;
    }
}   

