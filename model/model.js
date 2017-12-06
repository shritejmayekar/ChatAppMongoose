var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/chatApp');
// var db = mongoose.connection;

mongoose.connect('mongodb://localhost:27017/chatApp',{ useMongoClient: true });
mongoose.Promise = global.Promise;

// db.on('error',console.error.bind(console,'Connection error'));
// db.once('open',function() {
//   console.log("connected");
// })

var userSchema = mongoose.Schema({
  name:String,
  password:String,
  email:String
});

var userModel = mongoose.model('userInfo',userSchema,'userInfo');
module.exports=userModel;
