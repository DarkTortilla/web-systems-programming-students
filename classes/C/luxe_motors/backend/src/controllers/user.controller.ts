import type { Request, Response } from "express";
import { User } from "../models/index.ts";
import { CreateUserDTO } from "../dto/user/CreateUserDto.ts";

export class UserController {
  constructor() {}
  //TODO: implement pagination
  //express-validator, DTO
  public async getAllUsers(_req: Request, res: Response) {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (err) {
      console.log(err);
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
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "internal server error" });
    }
  }
  public async createUser(req: Request, res: Response) {
    try {

      const dto = CreateUserDTO.create(req.body)
      const user = await User.create({...dto});
      //   const user = new User();
      //   user.age= age;

      

      await user.save();
      res.status(201).json({ message: "user created", user });
    } catch (err) {
      
      
      res.status(500).json({ message: "internal server error" });
    }
  }

  public async updateUser(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const { name, lastName, age, email, password } = req.body;
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ message: "user not found" });
      }
      
      user.name = name;
      user.lastName = lastName;
      user.age = age;
      user.email = email;
      user.password = password;
      await user.save();

      res.json({ message: " user updated", user });
    } catch (err) {
      console.log(err);
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

      user.isActive =false;
      res.status(200).json({message:'user deleted'});
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "internal server error" });
    }
  }
}
