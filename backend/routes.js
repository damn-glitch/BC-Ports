// CargoChain/backend/routes.js
const express = require('express');
const router = express.Router();
const cargoController = require('./controllers/cargoController');

router.get('/', (req, res) => {
  res.send('Welcome to CargoChain API');
});

router.route('/buyer/:id')
  .get(cargoController.getCargo);

router.route('/dispute/:id')
  .get(cargoController.getCargo);

module.exports = router;
