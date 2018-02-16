var model = require('../model/model.js');

exports.signup = function(data, done) {
  console.log(data);
  var newData = new model();
  newData.name = data.name;
  newData.password = data.password;
  newData.email = data.email;
  newData.save(function(err){
    if(err) throw err;
    return done('', 'data saved');
  })
}

exports.signin = function(data ,done) {
  model.findOne({name:data.name,password:data.password},function(err,res) {
    console.log(res);
    if(res == null) {
      return done('','login unsucess');
    }
    else {
      return done('','authenticated');
    }
  })

}
