import type { Request, Response } from "express";
const users =[{
    id:1,
    name:'',
    lastName:'',
    email:'',
    role:'',
    password:'',
    profileImg:'',
}];

// getAll, CreateUser, UpdateUser, DeleteUser, /users/:id/role -PATCH

export class UserController{
    getUserById(req:Request, res:Response){
        const id = Number(req.params.id);
        const user = users.find(user=>user.id===id);
        if(!user){
            res.status(404).json({message:'user not found'});
            return;
        }
        res.json({...user, password:''});
    }
}