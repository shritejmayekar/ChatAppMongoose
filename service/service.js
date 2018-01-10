var model = require('../model');
var UserModel = model.UserModel;
// console.log(UserModel);
var MessageModel = model.MessageModel;
exports.signup = function(data, done) {
  console.log(data);
  var newData = new UserModel();
  newData.name = data.name;
  newData.password = data.password;
  newData.email = data.email;
  newData.save(function(err){
    if(err) throw err;
    return done('', 'data saved');
  })
}

exports.signin = function(data ,done) {

  UserModel.findOne({name:data.name,password:data.password},function(err,res) {
    console.log(res);
    if(res == null) {
      return done('','login unsucess');
    }
    else {
      //req.session.name = data.name;

      return done('','authenticated');
    }
  })

  //console.log(getLoginCredentials(data,done));
}
