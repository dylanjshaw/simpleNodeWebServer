// var moment = require('moment');
// console.log(moment().format('ddd, hA'));
// var http = require('http');
// var fs = require('fs');

var express = require('express');
var app = express();
var morgan = require('morgan');
  app.use(morgan('dev'));
  //request logger
var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');
var mongoose = require('mongoose');
//-----------------------------------------------------------------------------
mongoose.connect('mongodb://127.0.0.1/my_database');
var port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
//-----------------------------------------------------------------------------

app.use('/assets', express.static(__dirname + '/public'));
//this is middleware, fetching the stylesheet

app.use('/', function(req, res, next){
  next();
});

//-----------------------------------------------------------------------------
//ALL of the below GET requests are also middleware because they happen
  //between the reqest and the response
//-----------------------------------------------------------------------------
htmlController(app);
apiController(app);

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
