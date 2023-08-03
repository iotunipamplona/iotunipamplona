const mongoose = require("mongoose");
const {temperaturai1Model} = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require("express-validator");
/** 
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const gettemperaturai1s = async (req, res) =>{
  try{
  const data = await temperaturai1Model.find({})
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
const gettemperaturai1 = async (req, res) =>{
   try{
    req =matchedData(req);
    const {id} = req;
    const data = await temperaturai1Model.findById(id);
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
const createtemperaturai1 = async(req,res) =>{
  try{
    const body = matchedData(req)
    const data = await temperaturai1Model.create(body);
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
const updatetemperaturai1 = async (req, res) => {
  try {
    const {id, ...body} = matchedData(req);
    const data = await temperaturai1Model.findOneAndUpdate(id, body 
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
const deletetemperaturai1 = async (req,res) =>{  
    try{

  req = matchedData(req);
  const {id} = req;
  const data = await temperaturai1Model.deleteOne({_id:id});
  res.send({data});
 }catch(e){
  handleHttpError(res,"ERROR");
}
};


module.exports={gettemperaturai1s, gettemperaturai1, createtemperaturai1, updatetemperaturai1, deletetemperaturai1};