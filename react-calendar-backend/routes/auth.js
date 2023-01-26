const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validateFields');
const { createUser, loginUser, revalidarToken } = require('../controllers/auth');
const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();


router.post(
    '/new', 
    [ // middlewares
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Email is required').isEmail(),
        check('password', 'Password should be at least 6 characters').isLength({ min: 6 }),
        validateFields
    ],
    createUser 
);

router.post(
    '/',
    [
        check('email', 'Email is required').isEmail(),
        check('password', 'Password should be at least 6 characters').isLength({ min: 6 }),
        validateFields
    ],
    loginUser 
);


router.get('/renew', validarJWT ,revalidarToken );




module.exports = router;