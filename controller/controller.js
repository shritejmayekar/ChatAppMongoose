var service = require('../service/service.js');
exports.signup = function(req, res) {
  console.log(req.body);
  service.signup(req.body, function(err, signupResponse) {
    if(signupResponse == 'data saved') {
      res.send({message: 'register success'});
    }
  })


  // if(req.body.name == 'sham' && req.body.password == '123' && req.body.email == 'sham@yahoo.com')
  //   res.send({
  //     status:'register success'
  //   })
  //   else {
  //     res.send({
  //       status:'register unsuccess'
  //     })
  //   }
}

exports.signin = function(req,res) {
  service.signin(req.body,function(err,signinResponse) {
    if(signinResponse == 'authenticated') {
      res.send({message: 'login success'})
    }
    else {
      res.send({message:'login unsucess'})
    }
  })
}
