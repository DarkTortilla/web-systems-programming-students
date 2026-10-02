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

// getAllUsers, CreateUser, UpdateUser -PUT, DeleteUser, /users/:id/role -PATCH

export class UserController {
  public getAllUsers(_req: Request, res: Response) {
    pool
      .execute(
        `select id,
        name,
        last_name,
        age,
        email,
        role from users`,
      )
      .then((result) => {
        const users = result[0];
        res.json(users);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "internal server error" });
      });
  }

  // console.log(5); setTimeout(()=>console.log('hola'), 0), console.log('holi');i

  public async getUserById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const result = await pool.execute(
        "select id, name, last_name, age, email, role from users where id = ?",
        [id],
      );
      //DTO
      const user = result[0] as User[];
      if (!user[0]) {
        res.status(404).json({ message: "user not found" });
        return;
      }
      res.json(user[0]);
    } catch (err) {
      //TODO: implement global error handler
      res.status(500).json({ message: "internal server error" });
    }
  }

  public createUser(req: Request, res: Response) {
    const { name, lastName, email, role, password, profileImg } = req.body;
    const newId = users.length > 0 ? users[users.length - 1]?.id! + 1 : 1;
    const user = {
      id: newId,
      name,
      lastName,
      email,
      role,
      password,
      profileImg,
    };
    users.push(user);
    res.status(201).json({ message: "user created" });
  }
  //   /users/:id/role -PATCH
  public updateRole(req: Request, res: Response) {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) {
      res.status(404).json({ message: "user not found" });
      return;
    }
    const newRole = req.body.role;
    user.role = newRole;

    res.json({ message: "user updated" });
  }

  public async deleteUser(req: Request, res: Response) {
    try{
    const id = Number(req.params.id);
    const [result, _] = await pool.execute('delete from users where id = ?', [id]);
    const { affectedRows } = result as any;
    if(affectedRows===0){
      return res.status(404).json({message: 'user not found'});
    }

    res.json({ message: "user deleted" });
    }catch(err){
      console.log(err);
      res.status(500).json({message:'internal server error'});
    }
  }
}


// delete from users where id = ?
// insert into users(name,..., password) values (?, ?, ?) , [];
// update users set name=?, ...,  password=? where id =?  