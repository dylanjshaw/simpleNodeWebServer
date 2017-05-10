var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
  app.get('/', function(req, res){
    res.render('index');
  });

  app.get('/person/:name', function(req, res){
    res.render('person', {name: req.params.name});
  });

  // app.post('/person', urlEncodedParser, function(req, res){
  //   res.send('Thank you!')
  //   console.log(req.body);
  // });
}
