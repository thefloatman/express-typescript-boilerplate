import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import userRouter from "./routers/user.router"

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json("welcome to home");
});

app.use("/user", userRouter);

app.listen(port, () => console.log(`app listening on port ${port}!`));
