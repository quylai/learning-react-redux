


var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

// defining table columns
var GuestInfo = sequelize.define("guest_info_table", {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,

  user_name: Sequelize.STRING,
  lic_plate_num: Sequelize.STRING,
  lic_plate_state: Sequelize.STRING,

  car_make: Sequelize.STRING,
  car_model: Sequelize.STRING,
  car_color: Sequelize.STRING,
  created_at: Sequelize.DATE
});


GuestInfo.sync();
module.exports = GuestInfo;
