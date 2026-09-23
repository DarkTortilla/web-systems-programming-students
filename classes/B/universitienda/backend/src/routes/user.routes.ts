import { UserController } from "../controllers/user.controller.ts";
import { Router } from "express";

const router = Router();
const userController = new UserController();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.post('/', userController.createUser);

export default router; 
