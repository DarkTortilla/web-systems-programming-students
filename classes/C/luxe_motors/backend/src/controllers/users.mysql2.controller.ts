import type { Request, Response } from "express";
import pool from "../conf/dbConnection.ts";

//create user, getall, delete, update

type User = {};
//DTO
export class UserController {
  //const findUser = (id:number) => new Promise

  async getUserById(req: Request, res: Response) {
    // console.log('5');
    // setTimeout(()=>console.log('55'), 0);
    // console.log(6);
    // //5, 55, 6, 1
    // //5, 6, 55, 3

    // email = 'frank@gmail.com OR 1=1; --'
    // Select * from user where email= frank@gmail.com OR 1=1; -- and password = ${password}
    const id = req.params.id!;
    const [result, _] = await pool.execute(`select * from users where id=$1`, [
      id,
    ]);
    const user = result as unknown as User[];
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    const userResponse = { ...user, password: "" };
    res.json(userResponse);
  }

  getAllUsers(_req: Request, res: Response) {
    const query = "select * from users";
    pool
      .execute(query)
      .then(([result, _]) => {
        console.log(result);
        res.status(200).json(result);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: "internal server error" });
      });
  }

  async createUser(req: Request, res: Response) {
    const { name, last_name, age, email, role, password } = req.body;
    const query = `
            insert into users (name, last_name, age, email, role, password)
            values (?, ?, ?, ?, ?, ?)
        `;

    await pool.execute(query, [name, last_name, age, email, role, password]);
    res.status(201).json({ message: "user created" });
  }

  async updateUser(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (Number.isNaN(id)) {
        res.status(400).json({ message: "id must be a number" });
        return;
      }
      //DTO
      //express validator
      const { name, last_name, age, email, role, password } = req.body;
      const query = `update users set name = ?, last_name = ?, age = ?, email = ?, role = ?, password = ? where id = ?`;

      const [result] = (await pool.execute(query, [
        name,
        last_name,
        age,
        email,
        role,
        password,
        id,
      ])) as any;
      if (result.affectedRows > 0) {
        return res.json({ message: "user updated" });
      }
      res.status(404).json({ message: "user not found" });
    } catch (err) {
      //TODO: implement global error handler
      res.status(500).json({ message: "internal server error" });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (Number.isNaN(id)) {
        // Not a number
        res.status(400).json({ message: "id must be a number" });
        return;
      }
      const result = await pool.execute("select * from users where id = ?", [
        id,
      ]);
      await pool.execute("delete from users where id = ?", [id]);
      res.json({ message: `user with id ${id} deleted` });
    } catch (err) {
      //TODO: implement global error handler
      res.status(500).json({ message: "internal server error" });
    }
  }
}
