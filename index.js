const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();


app.use(express(JSON));
app.use(cors());

app.listen(3000)