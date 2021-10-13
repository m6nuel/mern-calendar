// Events Route
// /api/events

const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();

const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events");
const { isDate } = require("../helpers/isDate");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

router.use( validarJWT );

// Obtener eventos
router.get( '/', getEventos );

// crear un nuevo evento
router.post( 
    '/', 
    [
        check( 'title', 'El titulo es obligatorio').not().isEmpty(),
        check( 'start', 'La fecha de inicio es obligatoria' ).custom( isDate ),
        check( 'end', 'La fecha de finalizacion es obligatoria' ).custom( isDate ),
        validarCampos
    ],
    crearEvento );

// Actualizr evento
router.put( 
    '/:id',
    [
        check( 'title', 'El titulo es obligatorio').not().isEmpty(),
        check( 'start', 'La fecha de inicio es obligatoria' ).custom( isDate ),
        check( 'end', 'La fecha de finalizacion es obligatoria' ).custom( isDate ),
        validarCampos
    ],
    actualizarEvento );

// borrar evento
router.delete( '/:id', eliminarEvento );

module.exports = router;