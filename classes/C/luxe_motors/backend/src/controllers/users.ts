import type { Request, Response } from "express";

const users=[{
    id:1,
    name:'',
    lastName:'',
    email:'',
    role:'',
    password:'',
    profileImg:'',
}]

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
}