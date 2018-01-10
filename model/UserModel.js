
var mongoose = require('mongoose');


// user Schema
var userSchema = mongoose.Schema({
  name: String,
  password: String,
  email: String
});
var UserModel = mongoose.model('userInfo', userSchema, 'userInfo');

module.exports = UserModel;
