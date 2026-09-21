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

// getAllUsers, CreateUser, UpdateUser -PUT, DeleteUser, /users/:id/role -PATCH

export class UserController {
  public getAllUsers(req: Request, res: Response) {
    res.json(users.map((user) => ({ ...user, password: "" })));
  }

  public getUserById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) {
      res.status(404).json({ message: "user not found" });
      return;
    }
    res.json({ ...user, password: "" });
  }

  public createUser(req: Request, res: Response) {
    const { name, lastName, email, role, password, profileImg } = req.body;
    const newId = users.length > 0 ? users[users.length-1]?.id! + 1 : 1;
    const user = {id: newId, name, lastName, email, role, password, profileImg};
    users.push(user);
    res.status(201).json({message:'user created'});
  }
  //   /users/:id/role -PATCH
  public updateRole(req:Request, res:Response){
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) {
      res.status(404).json({ message: "user not found" });
      return;
    }
    const newRole =req.body.role;
    user.role = newRole;

    res.json({message:'user updated'});

  }

  

}

const suma = (a: number, b: number) => {
  return a + b;
};

const suma2 = (a: number, b: number) => a + b;

// { } cuerpo de codigo, tambien pueden indicar que es un objeto
