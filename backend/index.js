const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const dbconexion = require('./config/mongo');
const app = express();
const cors = require("cors");

app.use(cors());
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/", require("./routes"));

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

app.listen(port, () => {
    console.log(`Listening at ${port}`);
    dbconexion(); // Conectar a la base de datos después de iniciar el servidor
});