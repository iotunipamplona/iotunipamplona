const express =require("express");
const { gettemperaturai1s, gettemperaturai1, createtemperaturai1, updatetemperaturai1, deletetemperaturai1 } = require("../controllers/temperaturai1");
const router = express.Router();
/**Lista los usuarios */

router.get("/", gettemperaturai1s);

/**Obtener un detalle de usuario */

router.get("/:id", gettemperaturai1);

/**Crea un registro de usuario */
router.post("/", createtemperaturai1);


/**Actualizar un registro de usuario */
router.put("/:id", updatetemperaturai1);

/**Eliminar un rusuario */

router.delete("/:id", deletetemperaturai1);



module.exports = router;
