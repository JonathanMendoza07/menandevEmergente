const { verifyJwToken } = require("../middleware/auth.middleware");
const{
  GetMantenimientoById,
  GetMantenimientosPend, 
  GetMantenimientos, 
  Newmant
} = require('../controllers').Mantenimientos;


const router = require("express").Router();


router.post('/:id', verifyJwToken, GetMantenimientoById);  

router.get('/all', GetMantenimientos);  

router.get('/pendient', GetMantenimientosPend);

router.post('/new/mant', Newmant);

module.exports = router;