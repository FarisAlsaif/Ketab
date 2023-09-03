const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require('body-parser')


const { db } = require("./database/db-module");
const  booksRouter  = require("./routers/books-router");
const authRouter = require("./routers/auth-router");

const app = express();
const port = 4000;
app.use(cors());
app.use(express.json());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../angular/dist/angular")));

app.use("/api", booksRouter);
app.use("/api/auth", authRouter);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
