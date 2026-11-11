import type { NextFunction, Request, Response } from "express";
import {Category} from "../models/index.ts";

export class CategoryController{

    public async getCategories(req: Request, res:Response, next:NextFunction){
        try {
            const categories = await Category.findAll();
            return res.status(200).json(categories);
        } catch (error) {
            next(error);
        }
    }
}



