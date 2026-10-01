import { Router } from "express";
import { UserController } from "../controllers/users.mysql2.controller.ts";
const router = Router();
const userController = new UserController();

router.get('/:id', userController.getUserById);
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;
