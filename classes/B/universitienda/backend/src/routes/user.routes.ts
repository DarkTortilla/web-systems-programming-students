import { UserController } from "../controllers/user.controller.ts";
import { Router } from "express";
import { createUserValidator } from "../validators/user.ts";
import { validate } from "../middlewares/validateDate.ts";

const router = Router();
const userController = new UserController();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.post('/',createUserValidator, validate, userController.createUser);

export default router; 
