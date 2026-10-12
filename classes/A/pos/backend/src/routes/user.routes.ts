import { Router } from "express";
import { UserController } from "../controllers/user.controller.ts";
import { createUserValidator } from "../validators/user.ts";
import { validate } from "../middlewares/validateData.ts";

const userController = new UserController();
const router = Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/',createUserValidator, validate, userController.createUser);
router.put('/:id',userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;
//localhost:3000/api/v1/products -PUT
//localhost:3000/api/v1/products -GET