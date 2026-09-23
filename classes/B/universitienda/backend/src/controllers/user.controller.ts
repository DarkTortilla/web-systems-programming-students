import type { Request, Response } from "express";

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
    // https://store.me.com/api/v1/users/181613513/orders?status=canceled
    const id = Number(req.params["id"]);

    const user = users.find((u) => u.id === id);
    //Javascript object notation
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    res.json(user);
  }

  public getAllUsers(_req: Request, res: Response) {

    /**
     * { limit: 10, page: 1}
     */
    // const page = req.query['page'];
    // const limit = req.query['limit'];
    // const {page,limit} = req.query;

    res.json(users);
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
