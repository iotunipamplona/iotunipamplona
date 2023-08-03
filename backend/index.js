const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const cors = require("cors");

app.use(cors());
const port = process.env.PORT || 5000;

app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.error("MongoDB connection error:", error);
});

// Rutas
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

app.use("/api/user", userRoutes);
app.use("/api/temperaturai1", temperaturai1Routes);
app.use("/api/humedadi1", humedadi1Routes);
app.use("/api/co2i1", co2i1Routes);
app.use("/api/temperaturai2", temperaturai2Routes);
app.use("/api/humedadi2", humedadi2Routes);
app.use("/api/co2i2", co2i2Routes);
app.use("/api/temperaturai3", temperaturai3Routes);
app.use("/api/humedadi3", humedadi3Routes);
app.use("/api/co2i3", co2i3Routes);

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
});
