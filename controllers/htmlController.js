var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended: false});
var mongoose = require('mongoose');
var users = require('../models/users');

module.exports = function(app){
  app.get('/', function(req, res){
    res.render('index');
  });

  app.get('/person/:name', function(req, res){
    res.render('person', {name: req.params.name});
  });

  app.get('/people', function(req, res){
    mongoose.model('users').find(function(err, users){
      res.send(users);
    })
  });

  app.get('/dbcperson/:name', function(req, res){
    mongoose.model('users').find({name: req.params.name}, function(err, users){
      res.send(users);
    })
  });

  // app.post('/person', urlEncodedParser, function(req, res){
  //   res.send('Thank you!')
  //   console.log(req.body);
  // });
}
