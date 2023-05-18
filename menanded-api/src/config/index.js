require('dotenv').config();

module.exports = {
  port: process.env.PORT || 8088,
  host: process.env.HOST || '127.0.0.1',
  db_user: process.env.DB_USER || '',
  db_password: process.env.DB_PASSWORD || '',
  db_name: process.env.DB_NAME || '',
  db_server: process.env.DB_SERVER || '',
  db_port: process.env.DB_PORT || 1433,
  secret: "_key_api=()_2022"
};

