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


type User = {
  id: number;
  name: string;
  last_name: string;
  age: number;
  email: string;
  role: string;
  password?: string;
};

//CRUD de usuarios: getAll, getById, createUser,
// updateUser, deleteUser

// console.log('hola');
// setTimeout(()=>console.log('pp'),0);
// console.log('irving');
export class UserController {
  constructor() {}
  public async getUserById(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      const [result] = await pool.execute(
        `select id, name, last_name, age, email, role from users where id = ?`,
        [id],
      );

      const user = result as User[];
      if (!user[0]) {        
        return res.status(404).json({ message: "user not found" });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }

  public getAllUsers(_req: Request, res: Response) {
    pool
      .execute("select id, name, last_name, age, email, role from users")
      .then((result) => {
        // tranformar

        res.json(result[0]);
      })
      .catch((err) => {
        //console.log(err);
        res.status(500).json({ message: "internal server error" });
      });
  }

  public createUser(req: Request, res: Response) {
    console.log(req.body);
    console.log(req);
    const { name, lastName, email, role, password, profileImg } = req.body;
    const id = users[users.length - 1]?.id! + 1;
    users.push({ id, name, lastName, email, role, password, profileImg });

    res.status(201).json({ message: "user created" });
  }
  public updateUser(req: Request, res: Response) {
    const id = Number(req.params["id"]);
    const { name, lastName, email, role, password, profileImg } = req.body;

    const user = users.find((u) => u.id === id);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    user.name = name;
    user.email = email;
    user.lastName = lastName;
    user.role = role;
    user.password = password;
    user.profileImg = profileImg;

    res.status(200).json({ message: "user updated" });
  }
}
/// email = irving.cardona@edu.uaa.mx or 1=1 --
// select * from users where email = '' and password = '';
