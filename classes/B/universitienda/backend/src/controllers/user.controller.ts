import type { Request, Response } from "express";
import { User } from "../models/index.ts";
import { CreateUserDTO } from "../dto/users/CreateUserDTO.ts";
import { UserResponseDTO } from "../dto/users/UserResponseDTO.ts";

export class UserController {
  constructor() {}
  public async getAllUsers(_req: Request, res: Response) {
    try {
      const users = await User.findAll();
      res.json( users.map(u => UserResponseDTO.create(u)));
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  }
  public async getUserById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: "user not found" });
      }
      const userResponse = UserResponseDTO.create(user)
      res.json(userResponse);
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  }
  public async createUser(req: Request, res: Response) {
    try {
      const dto = CreateUserDTO.create(req.body);
      const user = await User.create({dto});

      res.status(201).json({ massage: "user created", user });
    } catch (error) {
      
      res.status(500).json({ message: "internal server error" });
    }
  }
  public async updateUser(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const { name, lastName, email, age } = req.body;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: "user not found" });
      }

      user.age = age;
      user.email = email;
      user.name = name;
      user.lastName = lastName;

      await user.save();
      res.status(200).json({ massage: "user updated", user });
    } catch (error) {
      //TODO: global error handler
      res.status(500).json({ message: "internal server error" });
    }
  }
  public async deleteUser(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: "user not found" });
      }

    //   await user.destroy();
      user.isActive= false;
      await user.save();
      res.json({massage:'user deleted', user});

    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  }
}
