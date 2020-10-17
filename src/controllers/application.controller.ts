import express from "express";
import { Request, Response } from "express";
import LoginRequest from "../interfaces/requests/login.request";
import SignUpRequest from "../interfaces/requests/signup.request";
import ApplicationService from "../services/application.service";

const router = express.Router();

router.post("/login", async (req: Request, res: Response) => {
  let requestBody: LoginRequest = req.body;
  let result = await ApplicationService.login(requestBody);
  res.json(result);
});

router.post("/sign_up", async (req: Request, res: Response) => {
  let requestBody: SignUpRequest = req.body;
  let result = await ApplicationService.signUp(requestBody);
  res.json(result);
});

export default router;
