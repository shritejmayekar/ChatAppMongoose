var controller = require('../controller/controller.js');

module.exports = function(app) {

  app.get('/', function(req, res) {

    res.sendFile(__dirname + "index.html");
  });

  app.get('/checkSession', function(req, res) {
  var result = {
    status: true,
    message: "You are authorized",
    name: req.session
  }
  if (req.session.name) {
    result.data = {
      isLogin: true
    }
  } else {
    result.data = {
      isLogin: false
    }
  }

  res.send(result);

});
app.get('/chat',function(req,res) {
  if(!req.session.name) {
    res.redirect('/');
  }
})

app.get('/logout', function(req, res) {
  req.session.destroy(function(err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
});
  // app.post('/signin', function(req, res) {
  //   if (req.body.name == 'admin' && req.body.password == '123')
  //     res.send({
  //       status: 'logged in'
  //     })
  //   else {
  //       res.send({
  //         status:'not logged in'
  //       })
  //   }
  // });

  app.post('/signup',controller.signup);
  app.post('/signin',controller.signin);
//  app.get('/checkSession',controller.checkSession);
}
