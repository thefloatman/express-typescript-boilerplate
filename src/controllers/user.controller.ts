import { User }  from '../models/user.model';
import { getRepository } from "typeorm";
import { Request, Response } from "express";

class UserController {
  getAllUsers(req: Request, res: Response) {
    return getRepository(User).find();
  }
}

export default new UserController();
