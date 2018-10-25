var express = require('express');
var router = express.Router();
var queens = require('../controllers/potluckController')

// GET all 
router.get('/', queens.index);
// POST new queen
router.post('/', queens.create);
// Add form
router.get('/new', queens.new);
// GET one
router.get('/:id', queens.show);
// POST new drone to a queen
router.post('/:id/drones', queens.createDrone);

module.exports = router;
