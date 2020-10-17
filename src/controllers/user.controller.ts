import { User }  from '../models/user.model';
import { getRepository } from "typeorm";
import { Request, Response } from "express";

class UserController {
  getAllUsers(req: Request, res: Response) {
    const users = getRepository(User).find();
    res.json(users);
  }
}

export default new UserController();
