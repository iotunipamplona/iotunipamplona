const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const dbconexion = require('./config/mongo');
const app = express();
const cors = require("cors");

dbconexion();

app.use(cors());

app.use(express.json());
app.use("/api", require("./routes"));
app.get("/", (req, res) => {
  const htmlResponse = `
  <html>
      <head>
          <title> PAGINA EN VERCEL</title>
      </head>
      <body>
          <h1>El proyecto en vercelll</h1>
      </body>
  </html>`;
  res.send(htmlResponse);
});


app.get('*',(req,res,next)=>{
  res.status(200).json({
    message:'bad request'
  });
});






module.exports = app;
