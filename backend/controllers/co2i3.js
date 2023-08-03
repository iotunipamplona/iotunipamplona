const mongoose = require("mongoose");
const {co2i3Model} = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require("express-validator");
/** 
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getco2i3s = async (req, res) =>{
  try{
  const data = await co2i3Model.find({})
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
const getco2i3 = async (req, res) =>{
   try{
    req =matchedData(req);
    const {id} = req;
    const data = await co2i3Model.findById(id);
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
const createco2i3 = async(req,res) =>{
  try{
    const body = matchedData(req)
    const data = await co2i3Model.create(body);
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
const updateco2i3 = async (req, res) => {
  try {
    const {id, ...body} = matchedData(req);
    const data = await co2i3Model.findOneAndUpdate(id, body 
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
const deleteco2i3 = async (req,res) =>{  
    try{

  req = matchedData(req);
  const {id} = req;
  const data = await co2i3Model.deleteOne({_id:id});
  res.send({data});
 }catch(e){
  handleHttpError(res,"ERROR");
}
};


module.exports={getco2i3s, getco2i3, createco2i3, updateco2i3, deleteco2i3};