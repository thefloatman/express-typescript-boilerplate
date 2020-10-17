import express from "express"
import { Request, Response } from "express";
import { AllUsersResponse } from "../interfaces/responses/user.response";
import UserService from "../services/user.service"

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  let result: AllUsersResponse = await UserService.findAll();
  res.json(result);
});

export default router
