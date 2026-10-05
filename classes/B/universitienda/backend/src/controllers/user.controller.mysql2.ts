import type { Request, Response } from "express";
import type { ResultSetHeader, RowDataPacket } from "mysql2";
import { pool } from "../conf/dbConnection.ts";

export class UserController {
  public async getAllUsers(_req: Request, res: Response) {
    try {
      const [users] = await pool.execute(
        "select id, name, last_name, age, email, role from users",
      );
      res.json(users);
    } catch {
      res.status(500).json({ message: "internal server error" });
    }
  }

  public async getUserById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const [users] = await pool.execute<RowDataPacket[]>(
        "select id, name, last_name, age, email, role from users where id = ?",
        [id],
      );
      if (!users[0]) {
        res.status(404).json({ message: "user not found" });
        return;
      }
      res.json(users);
    } catch {
      res.status(500).json({ message: "internal server error" });
    }
  }

  public async createUser(req: Request, res: Response) {
    try {
      const { name, lastName, age, email, role, password } = req.body;
      await pool.execute(
        "insert into users (name, last_name, age, email, role, password) values (?, ?, ?, ?, ?, ?)",
        [name, lastName, age, email, role, password],
      );
      res.status(201).json({ message: "user created" });
    } catch {
      res.status(500).json({ message: "internal server error" });
    }
  }

  public async updateUser(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const { name, lastName, age, email, role, password } = req.body;
      const [result] = await pool.execute<ResultSetHeader>(
        "update users set name = ?, last_name = ?, age = ?, email = ?, role = ?, password = ? where id = ?",
        [name, lastName, age, email, role, password, id],
      );
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "user not found" });
        return;
      }
      res.status(200).json({ message: "user updated" });
    } catch {
      res.status(500).json({ message: "internal server error" });
    }
  }
}
