var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const dishSchema = new Schema ({
    cuisine: String,
    dish: String
});

module.exports = mongoose.model('Dish', dishSchema);