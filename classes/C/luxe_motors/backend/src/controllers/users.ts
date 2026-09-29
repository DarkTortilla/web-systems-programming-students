import type { Request, Response } from "express";
import pool from "../conf/dbConnection.ts";


//create user, getall, delete, update

type User = {
} 
//DTO
export class UserController{

    //const findUser = (id:number) => new Promise

    async getUserById(req: Request, res: Response){

        // console.log('5');
        // setTimeout(()=>console.log('55'), 0);
        // console.log(6);
        // //5, 55, 6  1
        // // 5, 6, 55 3

        // email = 'frank@gmail.com OR 1=1; --'
        // Select * from user where email= frank@gmail.com OR 1=1; -- and password = ${password}
        const id = req.params.id!
        const [result, _] = await pool.execute(`select * from users where id=$1`, [id]);
        const user = result as unknown as User[];
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