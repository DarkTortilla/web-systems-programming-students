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
      res.json(users[0]);
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

  public async updateRole(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const [result] = await pool.execute<ResultSetHeader>(
        "update users set role = ? where id = ?",
        [req.body.role, id],
      );
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "user not found" });
        return;
      }
      res.json({ message: "user updated" });
    } catch {
      res.status(500).json({ message: "internal server error" });
    }
  }

  public async deleteUser(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const [result] = await pool.execute<ResultSetHeader>(
        "delete from users where id = ?",
        [id],
      );
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "user not found" });
        return;
      }
      res.json({ message: "user deleted" });
    } catch {
      res.status(500).json({ message: "internal server error" });
    }
  }
}
