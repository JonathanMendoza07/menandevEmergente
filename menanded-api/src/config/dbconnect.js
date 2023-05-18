const sql = require('mssql');
const config = require('.');

const credentialsSQL = {
  port: Number(config.db_port),
  user: config.db_user,
  password: config.db_password,
  database: config.db_name,
  server: config.db_server,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  }
}



const getConnection = async () => {
  try{
    const pool = await sql.connect(credentialsSQL);
    return pool;

  }catch(err){
    console.log(err);
  }  
};

module.exports = getConnection;