const mongoose = require("mongoose");
const {temperaturai3Model} = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require("express-validator");
/** 
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const gettemperaturai3s = async (req, res) =>{
  try{
  const data = await temperaturai3Model.find({})
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
const gettemperaturai3 = async (req, res) =>{
   try{
    req =matchedData(req);
    const {id} = req;
    const data = await temperaturai3Model.findById(id);
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
const createtemperaturai3 = async(req,res) =>{
  try{
    const body = matchedData(req)
    const data = await temperaturai3Model.create(body);
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
const updatetemperaturai3 = async (req, res) => {
  try {
    const {id, ...body} = matchedData(req);
    const data = await temperaturai3Model.findOneAndUpdate(id, body 
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
const deletetemperaturai3 = async (req,res) =>{  
    try{

  req = matchedData(req);
  const {id} = req;
  const data = await temperaturai3Model.deleteOne({_id:id});
  res.send({data});
 }catch(e){
  handleHttpError(res,"ERROR");
}
};


module.exports={gettemperaturai3s, gettemperaturai3, createtemperaturai3, updatetemperaturai3, deletetemperaturai3};