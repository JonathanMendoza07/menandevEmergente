const { response } = require('express');
const JWT = require('jsonwebtoken');
const sql = require('mssql');
const bcrypt = require('bcryptjs');

const connection = require('../config/dbconnect');
const { secret } = require('../config');

const VerifyUser = async (req, res = response) => {

  const { email, password } = req.body;
  
  const user = await checkUser(email)
    .catch(err => {return res.status(500).json(err)});

  if(!user) return res.status(404).json({ message: "Email o contraseña incorrectos" });
  else {
    const { id, cedula, fname, lname, typeUser } = user[0];

    if(!(await bcrypt.compare(password, user[0].password))) return res.status(404).json({ message: "Email o contraseña incorrectos" });
    if( id !== Number(req.decoded_id) ) return res.status(403).json({message: "Usuario no válido, email muy distinto a key"});

    const token = JWT.sign({id, cedula}, secret);
    return res.status(200).json({ message: "Usuario Verificado", data: { id, nameUser: fname+' '+lname, typeUser }, token });
  }

}


const SignInUser = async (req, res = response) => {

  const { email, password } = req.body;

  const user = await checkUser(email)
    .catch(err => { return res.status(500).json(err) });

  if (user.length < 1) return res.status(404).json({ message: "Email o contraseña incorrectos" });
  else {
    const { id, cedula, fname, lname, typeUser } = user[0];

    if (!(await bcrypt.compare(password, user[0].password))) return res.status(404).json({ message: "Email o contraseña incorrectos" });

    const token = JWT.sign({ id, cedula }, secret);
    return res.status(200).json({ message: "Usuario Encontrado", data: { id, nameUser: fname+' '+lname, typeUser }, token });
  }

}


const SignUpUser = async (req, res = response) => {

  const {
    user_fname,
    user_lname,
    user_email,
    user_cell,
    user_cedula,
    user_password
  } = req.body;

  const existUser = await checkUser(user_email)
    .catch(err => { return res.status(500).json(err) });

  if (existUser.length > 0) return res.status(300).json({ message: "EL correo electrónico ingresado ya se encuentra registrado" });

  const encrypPass = await bcrypt.hash(user_password, 8);
  const query = `INSERT INTO "User" (
    user_fname,user_lname,
    user_email,user_cell,
    user_cedula,user_password) 
  VALUES (@name, @lname, @email, @cell, @cedula, @password)`;

  const pool = await connection();
  const resp = await pool
    .request()
    .input('name', sql.VarChar, user_fname)
    .input('lname', sql.VarChar, user_lname)
    .input('email', sql.VarChar, user_email)
    .input('cell', sql.Char, user_cell)
    .input('cedula', sql.Char, user_cedula)
    .input('password', sql.VarChar, encrypPass)
    .query(query)
    .then(data => {
      return res.status(200).json({ message: "Usuario guardado correctamente", data: req.body });
    })
    .catch(err => {
      console.log(err)
      return res.status(500).json({ message: "Ocurrio un error inesperado" });
    });

}


const ChangePasswordUser = async (req, res = response) => {

  const decoded_id = req.decoded_id;
  const { old_password, new_password } = req.body;

  let query = `SELECT user_id as id, user_password, user_fname FROM "User" WHERE user_id = @id`;
  let queryUpdate = `UPDATE "User" SET user_password = @new_password WHERE user_id = @id`;

  const pool = await connection();
  const exist = await pool
    .request()
    .input('id', sql.Int, decoded_id)
    .query(query)
    .then(data => {
      return data.recordset[0]
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ message: "Ocurrio un error inesperado" });
    });

  if (!exist.id) return res.status(404).json({ message: "Usuario no encontrado para actualizar" });
  if (!(await bcrypt.compare(old_password, exist.user_password))) return res.status(403).json({ message: "Las contraseña actual no es correcta" });

  const encrypPass = await bcrypt.hash(new_password, 8);

  //update
  await pool
    .request()
    .input('id', sql.Int, decoded_id)
    .input('new_password', sql.Text, encrypPass)
    .query(queryUpdate)
    .then(data => {
      return res.status(200).json({ message: "Contraseña cambiada exitosamente" });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ message: "Ocurrio un error inesperado" });
    });


}


const checkUser = async (email) => {
  const query = `SELECT 
    user_id AS id,
    tipo_user_name as typeUser,
    user_nombre as fname,
    user_apellido as lname,
    user_cedula AS cedula,
    user_password AS password
  FROM Usuario
  INNER JOIN TipoUsuario ON user_tipo_user_id = tipo_user_id
  WHERE user_correo = @email;`;

  const pool = await connection();
  const userData = await pool
    .request()
    .input('email', sql.VarChar, email)
    .query(query)
    .then(data => {
      return data.recordset
    })
    .catch(err => {
      console.log(err);
      return { message: "Ocurrio un error inesperado" };
    });

  return userData;

}


module.exports = {
  VerifyUser,
  SignInUser,
  SignUpUser,
  ChangePasswordUser,
}

