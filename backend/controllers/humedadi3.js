const mongoose = require("mongoose");
const {humedadi3Model} = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require("express-validator");
/** 
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const gethumedadi3s = async (req, res) =>{
  try{
  const data = await humedadi3Model.find({})
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
const gethumedadi3 = async (req, res) =>{
   try{
    req =matchedData(req);
    const {id} = req;
    const data = await humedadi3Model.findById(id);
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
const createhumedadi3 = async(req,res) =>{
  try{
    const body = matchedData(req)
    const data = await humedadi3Model.create(body);
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
const updatehumedadi3 = async (req, res) => {
  try {
    const {id, ...body} = matchedData(req);
    const data = await humedadi3Model.findOneAndUpdate(id, body 
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
const deletehumedadi3 = async (req,res) =>{  
    try{

  req = matchedData(req);
  const {id} = req;
  const data = await humedadi3Model.deleteOne({_id:id});
  res.send({data});
 }catch(e){
  handleHttpError(res,"ERROR");
}
};


module.exports={gethumedadi3s, gethumedadi3, createhumedadi3, updatehumedadi3, deletehumedadi3};