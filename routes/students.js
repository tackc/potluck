var express = require('express');
var router = express.Router();
var students = require('../controllers/studentsController')

// GET all 
router.get('/', students.index);
// POST new student
router.post('/', students.create);
// Add form
router.get('/new', students.new);
// GET one
router.get('/:id', students.show);
// POST new dish to a student
router.post('/:id/dishes', students.createDish);

module.exports = router;
