const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const dbconexion = require('./config/mongo');
const app = express();
const cors = require("cors");

dbconexion();

app.use(cors());

app.use(express.json());

// Agregar console.log para verificar que las rutas se están configurando correctamente
console.log("Configurando rutas...");
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
  // Agregar console.log para verificar que las rutas desconocidas se están manejando correctamente
  console.log("Ruta desconocida. Manejando...");
  res.status(200).json({
    message:'bad request'
  });
});

module.exports = app;
