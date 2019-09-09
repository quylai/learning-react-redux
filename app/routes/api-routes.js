


var GuestInfo = require("../models/guest-info-table.js");
module.exports = function(app) {

  app.get("/api/all", function(req, res) {

    GuestInfo.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  app.post("/api/new", function(req, res) {

    console.log(req.body);

    GuestInfo.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
    
      user_name: req.body.user_name,
      lic_plate_num: req.body.lic_plate_num,
      lic_plate_state: req.body.lic_plate_state,
    
      car_make: req.body.car_make,
      car_model: req.body.car_model,
      car_color:  req.body.car_color,
      created_at: req.body.created_at

    }).then(function(results) {
      res.end();
    });
  });
};