import type { Request, Response } from "express";
import { User } from "../models/index.ts";

export class UserController {
  constructor() {}

  public async getAllUsers(_req: Request, res: Response) {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  }

  public async getUserById(req: Request, res: Response) {
    try {
      /* https://www.uaa.mx/courses/12
           params: 
           body: 
           query: 
           headers:;  
        */

      const id = Number(req.params.id);
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: "user not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  }

  public async createUser(req: Request, res: Response) {
    try {
      const { name, lastName, email, password, age, role } = req.body;
    //   const user = new User();
    //   user.name = name;
     
    //   await user.save();
      const user = await User.create({
        name,
        lastName,
        email,
        password,
        age,
        role,
      });
      res.status(201).json({message:'user created', user});
    } catch (error) {
        // TODO: global error handler
        res.status(500).json({message: 'internal server error'});
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
      user.isActive = false;
      await user.save();
      res.json({message:'user deleted'});
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  }

  // DTO
  // express-validator
  public async updateUser(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const { name, lastName, email, password, age, role } = req.body;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: "user not found" });
      }

      user.name = name;
      user.lastName = lastName;
      user.email = email;
      user.password = password;
      user.age = age;
      user.role = role;

      await user.save();
      res.json({message:'user updated', user});
    
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  }
}
