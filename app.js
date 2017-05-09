// var moment = require('moment');
// console.log(moment().format('ddd, hA'));
// var http = require('http');
// var fs = require('fs');

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var morgan = require('morgan')

app.use('/assets', express.static(__dirname + '/public'));
//this is middleware, fetching the stylesheet

app.use('/', function(req, res, next){
  console.log('hello hi');
  next();
});

app.use(morgan('dev'));
//request logger

app.set('view engine', 'ejs');
//looks inside view foler for static views

//all of the below GET requests are also middleware because they happen
  //between the reqest and the response

app.get('/', function(req, res){
  res.render('index');
});

app.get('/person/:name', function(req, res){
  res.send(`<html><head></head><body><h1> What up, ${req.params.name}! </h1></body></html>`)
});

app.get('/api', function(req, res){
  var obj = {key:'value'}
  res.json(obj);
})

app.listen(port);

// http.createServer(function(req, res){
//   switch (req.url){
//     case '/': {
//       fs.createReadStream(__dirname + '/index.htm').pipe(res);
//       break;
//     }
//     case '/json': {
//       res.writeHead(200, { 'Content-Type':'application/json'});
//       var data = {
//         firstname: 'Dylan',
//         lastname: 'Shaw'
//       };
//       res.end(JSON.stringify(data));
//       break;
//     }
//     default: {
//       res.writeHead(404);
//       res.end();
//     }
//   }
//
//   // var html = fs.createReadStream(__dirname + '/index.htm').pipe(res);
//
// }).listen(1337, '127.0.0.1');
//listen(port, localhost)
