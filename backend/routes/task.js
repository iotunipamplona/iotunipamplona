const express =require("express");
const { gettasks, gettask, createtask } = require("../controllers/task");
const router = express.Router();

router.get("/",gettasks);
router.get("/ :id",gettask);
router.post("/", createtask);
  

    

module.exports = router;
