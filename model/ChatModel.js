
var mongoose = require('mongoose');

// message schema
var messageSchema = mongoose.Schema({
  username: String,
  msg: String,
  session_id: Number
});

//messageSchema.statics.findActiveUser = function (callback) {
//  this.find(callback);
//}
var MessageModel = mongoose.model('userMessages', messageSchema, 'userMessages');

module.exports = MessageModel;
