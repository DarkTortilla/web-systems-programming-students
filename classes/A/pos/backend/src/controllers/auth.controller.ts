import type { Request, Response } from "express";
import { comparePassword, hashPassword } from "../utils/password.util.ts";
import User from "../models/User.ts";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const jwtSecret = process.env.JWT_SECRET! 
const refreshSecret = process.env.REFRESH_SECRET!
export class AuthController{
    constructor(){

    }

    public async register(req: Request, res: Response){
        try {
            const {name, lastName, email, password, repeatPassword, age} = req.body;
            const user = await User.findOne({where:{email}});
            if (user) {
                return res.status(409).json({message:'user already exist'})
            }
            if (password !==repeatPassword) {
                return res.status(400).json({message:'passwords doesn\'t match'});
            }
            const hash = await hashPassword(password);             
            await User.create({...req.body, password: hash});
            
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
            const match = await comparePassword(password, user.password);
            if (!match) {
                return res.status(401).json({message:'invalid credentials'});
            }
            if(!user.isActive){
                return res.status(403).json({message:'your account is inactive'});
            }
            
            const token = jwt.sign(
                {user:user.id, name:user.name},
                jwtSecret, 
                {expiresIn: '1h' }
            );

            const refreshToken = jwt.sign(
                {user:user.id, agent: req.headers["user-agent"]},
                refreshSecret,
                {expiresIn:"72h"}
            )
            user.refreshToken= refreshToken;
            await user.save()

            res.status(202).json({token, refreshToken});

        } catch (error) {
            res.status(500).json({message:'internal server error'})
        }
    }


}