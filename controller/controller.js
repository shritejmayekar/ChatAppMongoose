var service = require('../service/service.js');
//register controller
exports.signup = function(req, res) {
  console.log(req.body);
  service.signup(req.body, function(err, signupResponse) {
    if (signupResponse == 'data saved') {
      res.send({
        message: 'register success'
      });
    }
  })

}
//login controller
exports.signin = function(req, res) {
  service.signin(req.body, function(err, signinResponse) {
    if (signinResponse == 'authenticated') {
      req.session.name = req.body.name;
      res.send({
        message: 'login success'
      })
    } else {
      res.send({
        message: 'login unsucess'
      })
    }
  })
}
