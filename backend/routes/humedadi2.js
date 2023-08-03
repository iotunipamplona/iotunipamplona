const express =require("express");
const { gethumedadi2s, gethumedadi2, createhumedadi2, updatehumedadi2, deletehumedadi2 } = require("../controllers/humedadi2");
const router = express.Router();
/**Lista los usuarios */

router.get("/", gethumedadi2s);

/**Obtener un detalle de usuario */

router.get("/:id", gethumedadi2);

/**Crea un registro de usuario */
router.post("/", createhumedadi2);


/**Actualizar un registro de usuario */
router.put("/:id", updatehumedadi2);

/**Eliminar un rusuario */

router.delete("/:id", deletehumedadi2);



module.exports = router;
