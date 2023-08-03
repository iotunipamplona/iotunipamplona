const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const dbconexion = require('./config/mongo');
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Bienvenido a la Aplicación Express en Vercel</h1>");
});

app.use("/api", require("./routes"));

dbconexion();

module.exports = app;
