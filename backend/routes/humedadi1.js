const express =require("express");
const { gethumedadi1s, gethumedadi1, createhumedadi1, updatehumedadi1, deletehumedadi1 } = require("../controllers/humedadi1");
const router = express.Router();
/**Lista los usuarios */

router.get("/", gethumedadi1s);

/**Obtener un detalle de usuario */

router.get("/:id", gethumedadi1);

/**Crea un registro de usuario */
router.post("/", createhumedadi1);


/**Actualizar un registro de usuario */
router.put("/:id", updatehumedadi1);

/**Eliminar un rusuario */

router.delete("/:id", deletehumedadi1);



module.exports = router;
