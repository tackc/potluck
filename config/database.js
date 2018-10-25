var mongoose = require('mongoose');

mongoose.connect('mongodb://wdi:abc123@ds030817.mlab.com:30817/wdi-potluck',
    {useNewUrlParser: true}
);
