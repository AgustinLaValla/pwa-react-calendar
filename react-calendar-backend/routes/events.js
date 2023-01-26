/*
    Event Routes
    /api/events
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { validateFields } = require('../middlewares/validateFields');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEvents, createEvent, updateEvent, removeEvent } = require('../controllers/events');

const router = Router();

// Validate JWT
router.use( validarJWT );


// Obtener eventos 
router.get('/', getEvents );

// Crear un nuevo event
router.post(
    '/',
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom( isDate ),
        check('end','Fecha de finalización es obligatoria').custom( isDate ),
        validateFields
    ],
    createEvent 
);

// Actualizar Event
router.put(
    '/:id', 
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom( isDate ),
        check('end','Fecha de finalización es obligatoria').custom( isDate ),
        validateFields
    ],
    updateEvent 
);

// Borrar event
router.delete('/:id', removeEvent );

module.exports = router;