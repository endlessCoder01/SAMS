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

app.get("/posts", authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name));
});



function authenticateToken(req, res, next){
//Bearer Token
const authHeader = req.headers['authorization']
const token = authHeader && authHeader.split(' ')[1]

if(token == null)return res.sendStatus(401)
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user
    next()
    })

}

app.listen(3000);
