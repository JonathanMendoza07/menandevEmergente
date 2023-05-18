const { Router } = require('express');
const { verifyJwToken } = require('../middleware/auth.middleware');
const { 
    GetOneUser,
    UpdateDataUser, NewUser,
} = require('../controllers/user.controller');

const router = Router();


router.get("/one", verifyJwToken, GetOneUser);

router.put("/update", verifyJwToken, UpdateDataUser);

router.post("/NewUser",NewUser);

module.exports = router;