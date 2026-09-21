import { Router } from "express";
import { UserController } from "../controllers/user.controller.ts";

const userController = new UserController();
const router = Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.patch('/:id/role',userController.updateRole);
router.delete('/:id',userController.deleteUser);

export default router;
//localhost:3000/api/v1/products -PUT
//localhost:3000/api/v1/products -GET