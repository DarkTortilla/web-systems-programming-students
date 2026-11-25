import type { Request, Response } from "express";
import User from "../models/User.ts";
import { comparePassword, hashPassword } from "../utils/password.util.ts";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();

const jwtSecret= process.env.JWT_SECRET!
const refreshSecret = process.env.REFRESH_SECRET!

export class AuthController{
    constructor(){}


    public async register(req: Request, res: Response){
        try {
            const {name,lastName, age, email, password, repeatPassword} = req.body;
            
            const user = await User.findOne({where:{email}});
            if(user){
                return res.status(409).json({message:'user already exist'});
            }
            
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
                return res.status(401).json({message:'invalid credentials'});
            }
            const match = comparePassword(password, user.password);
            if (!match) {
                return res.status(401).json({message:'invalid credentials'});
            }
            const token = jwt.sign({user:user.id}, jwtSecret, {expiresIn:'30m'});
            const refreshToken = jwt.sign({user: user.id, agent:req.headers["user-agent"]}, refreshSecret, {expiresIn:'14d'});

            user.refreshToken =refreshToken;

            await user.save();

            res.status(200).json({token, refreshToken});

        } catch (error) {
            
        }
    }

}