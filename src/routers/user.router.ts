import express from "express"
import UserController from "../controllers/user.controller"

const router = express.Router();

router.get("/", (req, res) => {
  let result = UserController.getAllUsers(req, res);
  res.json(result);
})

export default router
