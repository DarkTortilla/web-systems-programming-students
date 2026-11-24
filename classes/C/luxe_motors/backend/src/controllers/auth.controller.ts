import type { Request, Response } from "express";
import User from "../models/User.ts";
import { comparePassword, hashPassword } from "../utils/password.util.ts";

export class AuthController {
  constructor() {}

  public async register(req: Request, res: Response) {
    try {
      const { email, password, repeatPassword } = req.body;

      const user = await User.findOne({ where: { email } });

      if (user) {
        return res.status(409).json({ message: "user already exists" });
      }

      if (password !== repeatPassword) {
        return res.status(400).json({ message: "passwords doesn't match" });
      }
      const hashed = await hashPassword(password);
      
      await User.create({ ...req.body, password: hashed });
      res.status(201).json({ message: "user created" });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  }

  public async login(req: Request, res: Response) {
    try {
        const {email, password} = req.body;
        
        const user = await User.findOne({where:{email}});

        if (!user) {
            return res.status(401).json({message: 'invalid credentials'});
        }
        const match = await comparePassword(password, user.password);

        if (!match) {
            return res.status(401).json({message: 'invalid credentials'});
        }
        

    } catch (error) {
         res.status(500).json({ message: "internal server error" });

    }
  }
}
