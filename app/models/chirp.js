var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Chirp = sequelize.define("chirp", {
  author: Sequelize.STRING,
  body: Sequelize.STRING,
  created_at: Sequelize.DATE
});

Chirp.sync();
module.exports = Chirp;
