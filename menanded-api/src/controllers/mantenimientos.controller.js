const { response, } = require("express");
const getConnection = require('../config/dbconnect')
const sql = require('mssql');
const connection = require('../config/dbconnect');


const GetMantenimientosPend = async (req, res = response) => {

  let query = `SELECT
    mant_id as idMant,
    user_nombre +' '+user_apellido as encargado,
    mant_estado as estado,
    comp_name as nameComputer,
    comp_descrip as descripComputer
  FROM Mantenimiento
  inner join Computadora on Computadora.comp_id = Mantenimiento.mant_comp_id
  inner join Usuario on Usuario.user_id = Computadora.comp_responsable
  where mant_estado ='Pendiente'`;

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

const GetMantenimientos = async (req, res = response) => {

  let query =`SELECT
    mant_id as idMant,
    user_nombre +' '+user_apellido as encargado,
    mant_estado as estado,
    comp_name as nameComputer,
    comp_descrip as descripComputer
  FROM Mantenimiento
  inner join Computadora on Computadora.comp_id = Mantenimiento.mant_comp_id
  inner join Usuario on Usuario.user_id = Computadora.comp_responsable`;

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

const Newmant = async (req, res = response) => {
  const { mant_id, mant_user_id, mant_comp_id, mant_date,
    mant_descrip, mant_estado } = req.body;
  const query = `INSERT INTO "Mantenimiento" (
      mant_id,
      mant_user_id,
      mant_comp_id,
      mant_date,
      mant_descrip,
      mant_estado)
  values (@id, @userId, @compId, @date, @descri, @status)`;

  const pool = await connection();
  const resp = await pool
    .request()
    .input('id', sql.Int, mant_id)
    .input('userId', sql.Int, mant_user_id)
    .input('compId', sql.Int, mant_comp_id)
    .input('date', sql.DateTime, mant_date)
    .input('descri', sql.Text, mant_descrip)
    .input('status', sql.VarChar, mant_estado)
    .query(query)
    .then(data => {
      return res.status(200).json({ message: "Mantenimiento Guardado", data: req.body });
    })
    .catch(err => {
      console.log(err)
      return res.status(500).json({ message: "Ocurrio un error inesperado" });
    });
}

const GetMantenimientoById = async (req, res = response) => {

  const { id } = req.params;

  let queryTypeUser = `DECLARE @res INT SET @res = (SELECT tipo_user_id as typeUser FROM TipoUsuario
    inner join Usuario on user_tipo_user_id = tipo_user_id WHERE user_id = @idUser)
  SELECT CASE 
    WHEN @res = (SELECT tipo_user_id FROM TipoUsuario WHERE tipo_user_name = 'Tecnico de Mantenimiento') THEN 'Tecnico'
      ELSE 'otro'
  END AS typeUser;`;

  let query = `SELECT
    user_nombre +' '+user_apellido as encargado,
    mant_estado as estado,
    comp_name as nameComputer,
    mant_date as dateMant,
    mant_descrip as descripcion,
    CASE
      WHEN (SELECT mant_user_id FROM Mantenimiento WHERE mant_id = @id) IS NULL THEN ''
      ELSE (SELECT user_nombre+' '+user_apellido as fullName FROM Mantenimiento
        inner join Usuario on user_id = Mantenimiento.mant_user_id
        WHERE mant_id = @id) 
    END as userMantDone
  FROM Mantenimiento
  inner join Computadora on Computadora.comp_id = Mantenimiento.mant_comp_id
  inner join Usuario on Usuario.user_id = Computadora.comp_responsable
  where mant_id = @id`;

  const pool = await getConnection();
  const mantenimiento = await pool
    .request()
    .input('id', Number(id))
    .query(query)
    .then(data => {
      const { rowsAffected, recordset } = data;
      console.log(data);
      if (rowsAffected == 0) return res.status(404).json({ message: "No se encontro el mantenimiento buscado" });
      return recordset[0];
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ message: "Ocurrio un error inesperado" });
    })

  await pool
    .request()
    .input('idUser', req.decoded_id)
    .query(queryTypeUser)
    .then(response => {
      let newData = { ...mantenimiento, typeUser: response.recordset[0].typeUser };
      return res.status(200).json({ message: "Datos obtenidos correctamente", data: newData });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ message: "Ocurrio un error inesperado" });
    });

}

module.exports = {
  GetMantenimientoById,
  GetMantenimientosPend,
  GetMantenimientos,
  Newmant,
}
