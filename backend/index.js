const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const dbconexion = require('./config/mongo');
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});

dbconexion();
module.exports = app;
