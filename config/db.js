var mongoose = require('mongoose');
var config = require("./index");

mongoose.connect(config.dbUrl, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
