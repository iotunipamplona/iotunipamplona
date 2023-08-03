const express =require("express");
const { gettemperaturai3s, gettemperaturai3, createtemperaturai3, updatetemperaturai3, deletetemperaturai3 } = require("../controllers/temperaturai3");
const router = express.Router();
/**Lista los usuarios */

router.get("/", gettemperaturai3s);

/**Obtener un detalle de usuario */

router.get("/:id", gettemperaturai3);

/**Crea un registro de usuario */
router.post("/", createtemperaturai3);


/**Actualizar un registro de usuario */
router.put("/:id", updatetemperaturai3);

/**Eliminar un rusuario */

router.delete("/:id", deletetemperaturai3);



module.exports = router;
