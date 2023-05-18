const router = require("express").Router();
const{
  GetComputadoras, 
  GetComputerById,
  Newpc
} = require('../controllers').Computadoras;

router.get('/', GetComputadoras);

router.post('/:id', GetComputerById);

router.post('/new/pc', Newpc);

module.exports = router;