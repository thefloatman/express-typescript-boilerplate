import "reflect-metadata";
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import passport from "passport"
import { createConnection } from "typeorm";
import UserController from "./controllers/user.controller";
import ApplicationController from "./controllers/application.controller";

createConnection()
  .then(async () => {
    const app = express();
    const port = 3000;
    require("dotenv").config();

    // Middleware
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(passport.initialize());
    app.use(passport.session());

    // Router
    app.use("/", ApplicationController);
    app.use("/user", UserController);

    app.listen(port, () => console.log(`app listening on port ${port}!`));
  })
  .catch((error) => console.log("TypeORM connection error: ", error));
