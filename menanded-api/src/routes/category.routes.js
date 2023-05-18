const router = require('express').Router();
const { 
  GetCategories, GetAllCategories, GetAllMarca, GetTipoUser,
} = require('../controllers/').Category;


router.get('/', GetCategories);
router.get('/AllCategories', GetAllCategories);
router.get('/AllMarcas', GetAllMarca);
router.get('/TipoUsers', GetTipoUser);


module.exports = router;