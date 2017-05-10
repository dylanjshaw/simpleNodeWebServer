var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

module.exports = function(app) {

  app.get('/api/person/:id', function(req, res){
    //RETRIEVE PERSON FROM DB
  })

  app.post('/api/person', jsonParser, function(req, res){
    res.send("Thank you for the JSON data.")
    console.log(req.body.firstname);
    console.log(req.body.lastname);
    //SAVES PERSON TO DB
  })

  app.delete('/api/person/:id', function(req, res){
    // DELETE PERSON FROM DB
  })


}
