const mongoose = require("mongoose");
const {humedadi1Model} = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require("express-validator");
/** 
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const gethumedadi1s = async (req, res) =>{
  try{
  const data = await humedadi1Model.find({})
  res.send({data});
  }catch(e){
    handleHttpError(res,'ERROR EN GET USUARIOS');
  }
};
/** 
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const gethumedadi1 = async (req, res) =>{
   try{
    req =matchedData(req);
    const {id} = req;
    const data = await humedadi1Model.findById(id);
    res.send({data});
   }catch(e){
    handleHttpError(res,"ERROR EN GET USUARIO");
  }
 
};
/** 
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createhumedadi1 = async(req,res) =>{
  try{
    const body = matchedData(req)
    const data = await humedadi1Model.create(body);
    res.send({data});
     }catch(e){
       handleHttpError(res,"ERROR CREANDO USUARIOS");
     }
};
/** 
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updatehumedadi1 = async (req, res) => {
  try {
    const {id, ...body} = matchedData(req);
    const data = await humedadi1Model.findOneAndUpdate(id, body 
    );
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};
/** 
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deletehumedadi1 = async (req,res) =>{  
    try{

  req = matchedData(req);
  const {id} = req;
  const data = await humedadi1Model.deleteOne({_id:id});
  res.send({data});
 }catch(e){
  handleHttpError(res,"ERROR");
}
};


module.exports={gethumedadi1s, gethumedadi1, createhumedadi1, updatehumedadi1, deletehumedadi1};