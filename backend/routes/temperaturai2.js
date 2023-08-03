const express =require("express");
const { gettemperaturai2s, gettemperaturai2, createtemperaturai2, updatetemperaturai2, deletetemperaturai2 } = require("../controllers/temperaturai2");
const router = express.Router();
/**Lista los usuarios */

router.get("/", gettemperaturai2s);

/**Obtener un detalle de usuario */

router.get("/:id", gettemperaturai2);

/**Crea un registro de usuario */
router.post("/", createtemperaturai2);


/**Actualizar un registro de usuario */
router.put("/:id", updatetemperaturai2);

/**Eliminar un rusuario */

router.delete("/:id", deletetemperaturai2);



module.exports = router;
