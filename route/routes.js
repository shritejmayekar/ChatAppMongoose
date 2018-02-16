var controller = require('../controller/controller.js');

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.sendFile(__dirname + "index.html");
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
  app.get('/checkSession',function(req,res) {
    console.log(req);
  });
}
