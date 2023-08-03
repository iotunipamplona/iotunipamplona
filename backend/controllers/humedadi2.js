const mongoose = require("mongoose");
const {humedadi2Model} = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require("express-validator");
/** 
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const gethumedadi2s = async (req, res) =>{
  try{
  const data = await humedadi2Model.find({})
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
const gethumedadi2 = async (req, res) =>{
   try{
    req =matchedData(req);
    const {id} = req;
    const data = await humedadi2Model.findById(id);
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
const createhumedadi2 = async(req,res) =>{
  try{
    const body = matchedData(req)
    const data = await humedadi2Model.create(body);
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
const updatehumedadi2 = async (req, res) => {
  try {
    const {id, ...body} = matchedData(req);
    const data = await humedadi2Model.findOneAndUpdate(id, body 
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
const deletehumedadi2 = async (req,res) =>{  
    try{

  req = matchedData(req);
  const {id} = req;
  const data = await humedadi2Model.deleteOne({_id:id});
  res.send({data});
 }catch(e){
  handleHttpError(res,"ERROR");
}
};


module.exports={gethumedadi2s, gethumedadi2, createhumedadi2, updatehumedadi2, deletehumedadi2};