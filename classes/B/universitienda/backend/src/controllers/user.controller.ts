import type { Request, Response } from "express";
import { pool } from "../conf/dbConnection.ts";
const users = [
  {
    id: 1,
    name: "",
    lastName: "",
    email: "",
    role: "",
    password: "",
    profileImg: "",
  },
  {
    id: 2,
    name: "",
    lastName: "",
    email: "",
    role: "",
    password: "",
    profileImg: "",
  },
];

//CRUD de usuarios: getAll, getById, createUser, 
// updateUser, deleteUser

export class UserController {
  constructor() {}
  public getUserById(req: Request, res: Response) {
    const id = Number(req.params["id"]);

    const user = users.find((u) => u.id === id);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    res.json(user);
  }

  public getAllUsers(_req: Request, res: Response) {

    pool.execute('select * from users')
    .then(result=>{
      //tranformar estos
      res.json()
    } )
    .catch(
      err=>{
          //console.log(err);
        res.status(500).json({message:'internal server error'})
      }); 
  }

  public createUser(req:Request, res: Response) { 
    console.log(req.body);
    console.log(req);
    const { name, lastName, email, role, password, profileImg } = req.body;
    const id = users[users.length-1]?.id! + 1;
    users.push( {id, name, lastName, email, role, password, profileImg});

    res.status(201).json({message:'user created'});
  }
  public updateUser(req: Request, res: Response){
    const id = Number(req.params["id"]);
    const { name, lastName, email, role, password, profileImg } = req.body;

    const user = users.find(u => u.id === id);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    user.name=name;
    user.email= email;
    user.lastName=lastName;
    user.role=role;
    user.password=password;
    user.profileImg=profileImg;
    
    res.status(200).json({message:'user updated'});
  }

}
