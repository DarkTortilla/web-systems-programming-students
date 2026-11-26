import type { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
import User from "../models/User.ts";
dotenv.config()
const jwtSecret =  process.env.JWT_SECRET!;

export const isAuthMiddleware =async (req:Request, res: Response, next:NextFunction) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]; 
        // Bearer jwt
        if(!token){
            return res.status(401);
        }
        const decoded = jwt.verify(token, jwtSecret) as {userId:number, name:string};
        console.log(decoded);
        const user = await User.findByPk(decoded.userId);

        if (!user) {
            return res.status(401);
        }
        req.user=user;
        next();
    } catch (error) {
        res.status(500)
    }
}