import { Request, Response } from "express";
import { ModelUsers } from "../models/users";

abstract class UserController {
  static getAllUsers = (req: Request, res: Response) => {
    const data = ModelUsers.getAllUsers();
    if (!data) return res.status(404).json({ error: "ERROR_TO_READ_DB" });
    res.json(data);
  };
}

export { UserController };
