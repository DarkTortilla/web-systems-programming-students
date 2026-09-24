import type { Request, Response } from "express";
import pool from "../conf/dbConnection.ts";

const users=[{
    id:1,
    name:'',
    lastName:'',
    email:'',
    role:'',
    password:'',
    profileImg:'',
}]
//create user, getall, delete, update
export class UserController{

    getUserById(req: Request, res: Response){
        const user = users.find(u=>u.id=== Number(req.params.id));
        if (!user) {
            res.status(404).json({message:'User not found'});
            return;
        }
        const userResponse = { ...user, password:''};
        res.json(userResponse);
    }

    getAllUsers(_req: Request, res: Response){
        const query='select * from users';
        pool.execute(query)
            .then(result=>{
                res.status(200).json(result);
            })
            .catch(
                err=>{
                    console.error(err);
                    res.status(500).json({message:'internal server error'});
                }
            );

    }
}