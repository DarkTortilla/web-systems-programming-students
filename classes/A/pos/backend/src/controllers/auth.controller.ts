import type { Request, Response } from "express";
import { hashPassword } from "../utils/password.util.ts";
import User from "../models/User.ts";

export class AuthController{
    constructor(){

    }

    public async register(req: Request, res: Response){
        try {
            const {name, lastName, email, password, repeatPassword, age} = req.body;
            
            if (password !==repeatPassword) {
                return res.status(400).json({message:'passwords doesn\'t match'});
            }

            const hash = await hashPassword(password);             
            /**
            / activation code 
            */

            const user = new User();
            user.name =name;
            user.lastName=lastName;
            user.password=hash;
            user.age=age;
            user.email=email;
            
            await user.save();
            res.status(201).json({message:'user created'});
        } catch (error) {
            res.status(500).json({message:'internal server error'})
        }
    }
    public async login(req: Request, res: Response){
        try {
            const {email, password} = req.body;

            const user = await User.findOne({where:{email}});

            if (!user) {
                return res.status(401).json({message:'invalid credentials'});
            }

        } catch (error) {
            
        }
    }


}