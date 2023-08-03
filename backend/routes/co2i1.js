const express =require("express");
const { getco2i1s, getco2i1, createco2i1, updateco2i1, deleteco2i1 } = require("../controllers/co2i1");
const router = express.Router();
/**Lista los usuarios */

router.get("/", getco2i1s);

/**Obtener un detalle de usuario */

router.get("/:id", getco2i1);

/**Crea un registro de usuario */
router.post("/", createco2i1);


/**Actualizar un registro de usuario */
router.put("/:id", updateco2i1);

/**Eliminar un rusuario */

router.delete("/:id", deleteco2i1);



module.exports = router;
