const mongoose = require("mongoose");
const {co2i2Model} = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require("express-validator");
/** 
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getco2i2s = async (req, res) =>{
  try{
  const data = await co2i2Model.find({})
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
const getco2i2 = async (req, res) =>{
   try{
    req =matchedData(req);
    const {id} = req;
    const data = await co2i2Model.findById(id);
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
const createco2i2 = async(req,res) =>{
  try{
    const body = matchedData(req)
    const data = await co2i2Model.create(body);
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
const updateco2i2 = async (req, res) => {
  try {
    const {id, ...body} = matchedData(req);
    const data = await co2i2Model.findOneAndUpdate(id, body 
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
const deleteco2i2 = async (req,res) =>{  
    try{

  req = matchedData(req);
  const {id} = req;
  const data = await co2i2Model.deleteOne({_id:id});
  res.send({data});
 }catch(e){
  handleHttpError(res,"ERROR");
}
};


module.exports={getco2i2s, getco2i2, createco2i2, updateco2i2, deleteco2i2};