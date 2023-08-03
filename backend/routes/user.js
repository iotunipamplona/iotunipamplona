const express =require("express");
const { getusers, getuser, createuser, updateuser, deleteuser } = require("../controllers/user");
const router = express.Router();
const {validatorCreateuser, validatorGetuser} = require("../validators/user")
/**Lista los usuarios */

router.get("/",getusers);

/**Obtener un detalle de usuario */

router.get("/:id", validatorGetuser, getuser);

/**Crea un registro de usuario */
router.post("/", validatorCreateuser, createuser);


/**Actualizar un registro de usuario */
router.put("/:id", validatorGetuser, validatorCreateuser, updateuser);

/**Eliminar un rusuario */

router.delete("/:id", validatorGetuser, deleteuser);



module.exports = router;
