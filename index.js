const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const posts = [
  {
    username: "Munashe",
    title: "Post 1",
  },
  {
    username: "Mike",
    title: "Post 2",
  },
];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post('/login', (req, res) => {
    //authenticate user using bcrypt

    const username = req.body.username
    const user = {name: username}
    const accessToken = jwt.sign(user, process.env.JWT_SECRET)
    res.json({accessToken: accessToken})
})

app.listen(3000);
