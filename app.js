// var moment = require('moment');
// console.log(moment().format('ddd, hA'));
// var http = require('http');
// var fs = require('fs');

var express = require('express');
var app = express();
var morgan = require('morgan')
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
var urlEncodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));
//this is middleware, fetching the stylesheet

app.use('/', function(req, res, next){
  console.log('hello hi');
  next();
});

app.use(morgan('dev'));
//request logger

app.set('view engine', 'ejs');
//looks inside view folder for static views
//-----------------------------------------------------------------------------
//ALL of the below GET requests are also middleware because they happen
  //between the reqest and the response
//-----------------------------------------------------------------------------
app.get('/', function(req, res){
  res.render('index');
});

app.get('/person/:name', function(req, res){
  res.render('person', {name: req.params.name});
});

app.post('/person', urlEncodedParser, function(req, res){
  res.send('Thank you!')
  console.log(req.body);
});

app.post('/personjson', jsonParser, function(req, res){
  res.send("Thank you for the JSON data.")
  console.log(req.body.firstname);
  console.log(req.body.lastname);
})

app.get('/api', function(req, res){
  var obj = {key:'value'}
  res.json(obj);
})

app.listen(port);
//-----------------------------------------------------------------------------
//BELOW is the manually generated server we used before expressJS
//-----------------------------------------------------------------------------
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
