const express = require("express");
const app = express();
const cors = require("cors");
const pg = require("pg");



//Routes
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "NewDB",
    password: "lakshya",
    port: 5432,
});

db.connect();

app.use(cors());
app.use(express.json()); //req.body



app.listen(5000, () => {
    console.log("server has started on port 3000");
  });

