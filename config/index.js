var config = {};
var flag = false;
config.dbUrl = "mongodb://localhost:27017/chatApp";
config.init = function () {
  flag = true;
  require("./db")
}

if (!flag) {
  config.init();
}
module.exports = config;
