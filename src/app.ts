import "reflect-metadata";
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { createConnection } from "typeorm";
import userRouter from "./routers/user.router";

createConnection()
  .then(async () => {
    const app = express();
    const port = 3000;

    // Middleware
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.get("/", (req, res) => {
      res.json("welcome to home");
    });

    // Router
    app.use("/user", userRouter);

    app.listen(port, () => console.log(`app listening on port ${port}!`));
  })
  .catch((error) => console.log("TypeORM connection error: ", error));
