var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  name: String
}, { collection : 'users' });

mongoose.model('users', usersSchema);
