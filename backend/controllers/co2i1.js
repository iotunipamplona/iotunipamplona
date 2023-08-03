const mongoose = require("mongoose");
const {co2i1Model} = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require("express-validator");
/** 
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getco2i1s = async (req, res) =>{
  try{
  const data = await co2i1Model.find({})
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
const getco2i1 = async (req, res) =>{
   try{
    req =matchedData(req);
    const {id} = req;
    const data = await co2i1Model.findById(id);
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
const createco2i1 = async(req,res) =>{
  try{
    const body = matchedData(req)
    const data = await co2i1Model.create(body);
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
const updateco2i1 = async (req, res) => {
  try {
    const {id, ...body} = matchedData(req);
    const data = await co2i1Model.findOneAndUpdate(id, body 
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
const deleteco2i1 = async (req,res) =>{  
    try{

  req = matchedData(req);
  const {id} = req;
  const data = await co2i1Model.deleteOne({_id:id});
  res.send({data});
 }catch(e){
  handleHttpError(res,"ERROR");
}
};


module.exports={getco2i1s, getco2i1, createco2i1, updateco2i1, deleteco2i1};