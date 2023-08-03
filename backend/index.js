const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const cors = require("cors");

// Configuración de conexión a la base de datos
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Database connected successfully");
})
.catch((error) => {
  console.error("Error connecting to database:", error);
});

app.use(cors());
app.use(express.json());

// Importar y usar rutas individuales
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
          <h1>El proyecto en Vercel</h1>
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

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server is running and up at port: ${port}`)
);
