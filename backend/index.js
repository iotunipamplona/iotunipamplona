const express = require("express");
require("dotenv").config();
const dbconexion = require('./config/mongo');
const app = express();

// Conectar a la base de datos
dbconexion();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Importar y usar las rutas
const userRoutes = require('./routes/user');
const temperaturai1Routes = require('./routes/temperaturai1');
const humedadi1Routes = require('./routes/humedadi1');
const co2i1Routes = require('./routes/co2i1');
const temperaturai2Routes = require('./routes/temperaturai2');
const humedadi2Routes = require('./routes/humedadi2');
const co2i2Routes = require('./routes/co2i2');
const temperaturai3Routes = require('./routes/temperaturai3');
const humedadi3Routes = require('./routes/humedadi3');
const co2i3Routes = require('./routes/co2i3');


app.use('/user', userRoutes);
app.use('/temperaturai1', temperaturai1Routes);
app.use('/humedadi1', humedadi1Routes);
app.use('/co2i1', co2i1Routes);
app.use('/temperaturai2', temperaturai2Routes);
app.use('/humedadi2', humedadi2Routes);
app.use('/co2i2', co2i2Routes);
app.use('/temperaturai3', temperaturai3Routes);
app.use('/humedadi3', humedadi3Routes);
app.use('/co2i3', co2i3Routes);


app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
});
