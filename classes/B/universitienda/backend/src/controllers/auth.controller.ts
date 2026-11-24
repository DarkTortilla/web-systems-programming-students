import type { Request, Response } from "express";
import User from "../models/User.ts";
import { hashPassword } from "../utils/password.util.ts";

export class AuthController{
    constructor(){}


    public async register(req: Request, res: Response){
        try {
            const {name,lastName, age, email, password, repeatPassword} = req.body;
            if (password!==repeatPassword) {
                return res.status(400).json({message:'password doesn\'t match'});
            }

            const hash = await hashPassword(password);
            await User.create({name, lastName, age, email, password: hash});
            //*
            // el correo ya llego.
            //*
            res.status(201).json({message:'user created'});
        } catch (error) {
            res.status(500).json()
        }
    }

    public async login(req: Request, res:Response){
        try {
            const {email, password} = req.body;
            const user = await User.findOne({where:{email}});
            if (!user) {
                res.status(401).json({message:'invalid credentials'});
            }



        } catch (error) {
            
        }
    }

}