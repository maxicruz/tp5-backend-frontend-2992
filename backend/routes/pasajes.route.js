// Creamos un manejador de rutas modulares
const express = require('express');
const router = express.Router();

// Definimos el controlador para el manejo del CRUD
const pasajeCtrl = require('../controllers/pasaje.controller');

// Definimos las rutas
router.get('/', pasajeCtrl.getPasajes);
router.post('/', pasajeCtrl.createPasaje);
router.get('/:id', pasajeCtrl.getPasaje);
router.put('/:id', pasajeCtrl.editPasaje);
router.delete('/:id', pasajeCtrl.deletePasaje);

// Exportacion del modulo de rutas
module.exports = router;