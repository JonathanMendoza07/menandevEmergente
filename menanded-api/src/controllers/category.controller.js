const { response, } = require("express");
const getConnection = require('../config/dbconnect')

const GetCategories = async (req, res = response) => {

  let query = `SELECT
    cat_id as _id,
    cat_name as name
  FROM Category`;

  const pool = await getConnection();
  await pool
    .request()
    .query(query)
    .then(data => {
      return res.status(200).json({message: "Datos obtenidos correctamente", data: data.recordset});
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({message: "Ocurrio un error inesperado"});
    })

}

const GetAllCategories = async(req, res= response)=>{
  let query = `select 
  cat_name as NombreCategoria,
  cat_tipo_componente as TipoCategoria
  from 
  Categoria`;

  const pool = await getConnection();
  await pool
    .request()
    .query(query)
    .then(data => {
      return res.status(200).json({message: "Datos obtenidos correctamente", data: data.recordset});
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({message: "Ocurrio un error inesperado"});
    })

}

const GetAllMarca = async(req, res= response)=>{
  let query = `select
  marca_name as Marca
  from Marca`;

  const pool = await getConnection();
  await pool
    .request()
    .query(query)
    .then(data => {
      return res.status(200).json({message: "Datos obtenidos correctamente", data: data.recordset});
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({message: "Ocurrio un error inesperado"});
    })

}


const GetTipoUser  = async(req, res= response)=>{
  let query = `SELECT
  tipo_user_name as Cargo
  FROM
   TipoUsuario`;

  const pool = await getConnection();
  await pool
    .request()
    .query(query)
    .then(data => {
      return res.status(200).json({message: "Datos obtenidos correctamente", data: data.recordset});
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({message: "Ocurrio un error inesperado"});
    })

}
module.exports = {
  GetCategories,
  GetAllCategories,
  GetAllMarca,
  GetTipoUser,
}