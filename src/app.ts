import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

const app = express();
const port = 3000;

// Where we will keep books
let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json("welcome to home");
});

app.listen(port, () => console.log(`app listening on port ${port}!`));