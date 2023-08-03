// index.js
const express = require("express");
require("dotenv").config();
const dbconexion = require('./config/mongo');
const app = express();
const cors = require("cors");

app.use(cors());
const port = process.env.PORT || 5000;

app.use(express.json());

// Llama a la función connectDB para conectar a la base de datos
dbconexion();

// Importar y usar las rutas
const userRoutes = require("./routes/user");
const temperaturai1Routes = require("./routes/temperaturai1");
const humedadi1Routes = require("./routes/humedadi1");
const co2i1Routes = require("./routes/co2i1");
const temperaturai2Routes = require("./routes/temperaturai2");
const humedadi2Routes = require("./routes/humedadi2");
const co2i2Routes = require("./routes/co2i2");
const temperaturai3Routes = require("./routes/temperaturai3");
const humedadi3Routes = require("./routes/humedadi3");
const co2i3Routes = require("./routes/co2i3");

app.use("/user", userRoutes);
app.use("/temperaturai1", temperaturai1Routes);
app.use("/humedadi1", humedadi1Routes);
app.use("/co2i1", co2i1Routes);
app.use("/temperaturai2", temperaturai2Routes);
app.use("/humedadi2", humedadi2Routes);
app.use("/co2i2", co2i2Routes);
app.use("/temperaturai3", temperaturai3Routes);
app.use("/humedadi3", humedadi3Routes);
app.use("/co2i3", co2i3Routes);

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
  console.log("Ruta desconocida. Manejando...");
  res.status(404).json({
    message:'Not Found'
  });
});

app.listen(port, () => {
    console.log(`Listening at ${port}`);
});
