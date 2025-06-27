const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express(JSON));
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

app.get('/login', (req, res) => {
    //authenticate user using bcrypt

})

app.listen(3000);
