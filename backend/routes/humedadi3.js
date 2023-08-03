const express =require("express");
const { gethumedadi3s, gethumedadi3, createhumedadi3, updatehumedadi3, deletehumedadi3 } = require("../controllers/humedadi3");
const router = express.Router();
/**Lista los usuarios */

router.get("/", gethumedadi3s);

/**Obtener un detalle de usuario */

router.get("/:id", gethumedadi3);

/**Crea un registro de usuario */
router.post("/", createhumedadi3);


/**Actualizar un registro de usuario */
router.put("/:id", updatehumedadi3);

/**Eliminar un rusuario */

router.delete("/:id", deletehumedadi3);



module.exports = router;
