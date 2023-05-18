const { Router } = require('express');
const { verifyJwToken } = require('../middleware/auth.middleware');
const { 
  VerifyUser,
  SignInUser, 
  SignUpUser,
  ChangePasswordUser
} = require('../controllers').Authentication;

const router = Router();

router.post('/verify', verifyJwToken, VerifyUser );
router.post('/signin', SignInUser );
router.post('/signup', SignUpUser );
router.put('/change-password', verifyJwToken, ChangePasswordUser);

module.exports = router;
