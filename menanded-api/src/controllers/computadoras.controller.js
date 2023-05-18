const { response, } = require("express");
const getConnection = require('../config/dbconnect')
const sql = require('mssql');
const connection = require('../config/dbconnect');

const GetComputadoras = async (req, res = response) => {
  let query = `SELECT
    comp_id as id,
    comp_name as name,
    comp_modelo as model,
    comp_descrip as description,
    comp_num_serie as numSerie,
    marca_name as marca,
    comp_image_url as imageURL
  from Computadora
  inner join Marca on Marca.marca_id = Computadora.comp_id`;
  const pool = await getConnection();
  await pool
    .request()
    .query(query)
    .then(data => {
      return res.status(200).json({ message: "Datos obtenidos correctamente", data: data.recordset });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ message: "Ocurrio un error inesperado" });
    })
}

const GetComputerById = async (req, res = response) => {

  const { id } = req.params;

  let query = `SELECT
    comp_name as nameComp,
    comp_descrip as descripComp,
    comp_num_serie as numSerie,
    comp_image_url as imageURL,
    cat_name as nameCategory,
    cat_tipo_componente as tipoComponent,
    prod_name as componentName,
    prod_version as versionSoftware ,
    user_nombre + ' ' + user_apellido as nameUser
  from Producto
    inner join Categoria on cat_id = prod_cat_id
    inner join ComputadoraProducto on comp_prod_Producto = prod_id
    inner join Computadora on comp_id = comp_prod_computador
    inner join Usuario on user_id = comp_responsable
  where comp_id = @id`;

  const pool = await getConnection();
  await pool
    .request()
    .input('id', id)
    .query(query)
    .then(data => {
      const { recordset } = data;
      const { nameComp, descripComp, numSerie, imageURL, nameUser } = recordset[0];
      let newFormatData = {
        nameComp,
        descripComp,
        numSerie,
        imageURL,
        encargado: nameUser,
        typeComponent: {
          software: [],
          hardware: []
        }
      };

      recordset.map( row => {
        const { nameCategory, tipoComponent, componentName, versionSoftware } = row;
        let newComponent = {
          category: nameCategory,
          nameComponent: componentName,
          versionSoftware
        }
        
        switch(tipoComponent){
          case "Software":
            newFormatData.typeComponent.software.push(newComponent);
            break;
          case "Hardware":
            newFormatData.typeComponent.hardware.push(newComponent);
            break;
        };

      })

      return res.status(200).json({ message: "Datos obtenidos correctamente", data: newFormatData });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ message: "Ocurrio un error inesperado" });
    })

}

const Newpc = async (req, res = response) => {
  const { comp_marca_id, comp_responsable, comp_name,
    comp_descrip, comp_num_service, comp_modelo, comp_image_url } = req.body;
  const query = `INSERT INTO "Computadora"(
    comp_marca_id,
    comp_responsable, 
    comp_name, 
    comp_descrip, 
    comp_num_serie, 
    comp_modelo,
    comp_image_url) 
    values (@marca, @responsable, @name, @descrip, @serie, @modelo, @img)`;

  const pool = await connection();
  const resp = await pool
    .request()
    .input('marca', sql.Int, comp_marca_id)
    .input('responsable', sql.Int, comp_responsable)
    .input('name', sql.Text, comp_name)
    .input('descrip', sql.Text, comp_descrip)
    .input('serie', sql.VarChar, comp_num_service)
    .input('modelo', sql.VarChar, comp_modelo)
    .input('img', sql.Text, comp_image_url)
    .query(query)
    .then(data => {
      return res.status(200).json({ message: "Computadora Guardada", data: req.body });
    })
    .catch(err => {
      console.log(err)
      return res.status(500).json({ message: "Ocurrio un error inesperado" });
    });
}

module.exports = {
  GetComputadoras,
  GetComputerById,
  Newpc,
}