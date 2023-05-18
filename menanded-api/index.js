const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const config = require('./src/config')

class Server {
  
  constructor() {
    this.app = express();

    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extend: true }));
  }

  routes(){
    this.app.get('/', (req, res) => res.json({message: "Server is ready"}));
    this.app.use('/api/v1/auth', require('./src/routes/auth.routes'));
    this.app.use('/api/v1/user', require('./src/routes/user.routes'));
    this.app.use('/api/v1/category', require('./src/routes/category.routes'));
    this.app.use('/api/v1/mantenimientos', require('./src/routes/mantenimientos.routes'));
    this.app.use('/api/v1/computadoras', require('./src/routes/computadoras.routes'));
  }

  listen() {
    this.app.listen(config.port, () => {
      console.log(`This server is running in ${config.host}:${config.port}`);
    });
  }

}

const server = new Server();
server.listen();