const mongoose = require("mongoose");
const {temperaturai2Model} = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require("express-validator");
/** 
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const gettemperaturai2s = async (req, res) =>{
  try{
  const data = await temperaturai2Model.find({})
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
const gettemperaturai2 = async (req, res) =>{
   try{
    req =matchedData(req);
    const {id} = req;
    const data = await temperaturai2Model.findById(id);
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
const createtemperaturai2 = async(req,res) =>{
  try{
    const body = matchedData(req)
    const data = await temperaturai2Model.create(body);
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
const updatetemperaturai2 = async (req, res) => {
  try {
    const {id, ...body} = matchedData(req);
    const data = await temperaturai2Model.findOneAndUpdate(id, body 
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
const deletetemperaturai2 = async (req,res) =>{  
    try{

  req = matchedData(req);
  const {id} = req;
  const data = await temperaturai2Model.deleteOne({_id:id});
  res.send({data});
 }catch(e){
  handleHttpError(res,"ERROR");
}
};


module.exports={gettemperaturai2s, gettemperaturai2, createtemperaturai2, updatetemperaturai2, deletetemperaturai2};