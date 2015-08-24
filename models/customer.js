var mongoose = require('mongoose');

var customerSchema = mongoose.Schema({
    name: String
});

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;