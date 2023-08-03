const express =require("express");
const { getco2i2s, getco2i2, createco2i2, updateco2i2, deleteco2i2 } = require("../controllers/co2i2");
const router = express.Router();
/**Lista los usuarios */

router.get("/", getco2i2s);

/**Obtener un detalle de usuario */

router.get("/:id", getco2i2);

/**Crea un registro de usuario */
router.post("/", createco2i2);


/**Actualizar un registro de usuario */
router.put("/:id", updateco2i2);

/**Eliminar un rusuario */

router.delete("/:id", deleteco2i2);



module.exports = router;
