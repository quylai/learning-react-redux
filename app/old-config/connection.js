


var Sequelize = require("sequelize");

// table setup
var sequelize = new Sequelize("valet_db", "root", "root", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;



