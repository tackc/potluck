const Student = require('../models/Student');
const Dish = require('../models/Dish');

module.exports = {
    
    index: function(req, res, next) {
        Student.find({}, function(err, students) {
            res.render('students/index', {students});
        })
    },
    
    new: function(req, res, next) {
        res.render('students/new');
    },
    
    create: function(req, res, next) {
        Student.create({
            name: req.body.name,
            dish: req.body.dish
        }, function(err) {
            if (!err) {
                res.redirect('/students');
            }
        });
    },

    show: function(req, res, next) {
        Student.findById(req.params.id).populate('dishes').exec(function(err, student){
            res.render('students/show', {student});
        })
    },

    createDish: function(req, res, next) {
        Student.findById(req.params.id, function(err, student) {
            var newDish = new Dish({
                cuisine: req.body.cuisine,
                dish: req.body.dish
            });
            newDish.save(function(err) {
                if (!err) {
                    student.dishes.push(newDish);
                    student.save(function(err) {
                        if (!err) {
                            res.redirect('/students/' + student._id);
                        }
                    });
                }
            })
        })
    }
};