// var moment = require('moment');
// console.log(moment().format('ddd, hA'));

var http = require('http');
var fs = require('fs');
var express = require('express')

http.createServer(function(req, res){
  switch (req.url){
    case '/': {
      fs.createReadStream(__dirname + '/index.htm').pipe(res);
      break;
    }
    case '/json': {
      res.writeHead(200, { 'Content-Type':'application/json'});
      var data = {
        firstname: 'Dylan',
        lastname: 'Shaw'
      };
      res.end(JSON.stringify(data));
      break;
    }
    default: {
      res.writeHead(404);
      res.end();
    }
  }

  // var html = fs.createReadStream(__dirname + '/index.htm').pipe(res);

}).listen(1337, '127.0.0.1');
//listen(port, localhost)
