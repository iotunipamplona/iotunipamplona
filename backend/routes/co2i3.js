const express =require("express");
const { getco2i3s, getco2i3, createco2i3, updateco2i3, deleteco2i3 } = require("../controllers/co2i3");
const router = express.Router();
/**Lista los usuarios */

router.get("/", getco2i3s);

/**Obtener un detalle de usuario */

router.get("/:id", getco2i3);

/**Crea un registro de usuario */
router.post("/", createco2i3);


/**Actualizar un registro de usuario */
router.put("/:id", updateco2i3);

/**Eliminar un rusuario */

router.delete("/:id", deleteco2i3);



module.exports = router;
