var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: String,
    dish: [{type: Schema.Types.ObjectId, ref: 'Dish'}]
});

module.exports = mongoose.model('Student', studentSchema);