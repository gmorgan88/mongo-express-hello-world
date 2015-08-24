var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json())


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/helloworld');



var Customer = require('./models/customer');

//browse
app.get('/', function (req, res) {
  Customer.find({}, null, null, function(err, customers){
	  if(err) return res.send(err).status(500);
	  //not like this;
	  res.send(customers);
  })
});

//get by id
app.get('/:id', function (req, res) {
  Customer.findById(req.params.id, function(err, customer){
	  if(err) return res.send(err).status(500);
	  
	  res.send(customer);
  })
});

//create
app.post('/', function (req, res) {
  var customer = new Customer(req.body);
  
  customer.save(function(err){
	  if(err) return res.send(err).status(500);
	  
	  res.send(customer.id);
  })
});

//update (sometimes creation too)
app.put('/:id', function(req, res){
	
})

//delete, duh.
app.delete('/:id', function(req,res){
	
})

var server = app.listen(8001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});