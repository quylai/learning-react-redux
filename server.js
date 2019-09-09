


var express = require("express");
var app = express();
// port value "process.env.PORT || 8080" formatted for Heroku 
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public")); // targeting index.html @ app/public

require("./app/routes/api-routes.js")(app); // api-routes.js as router of app

app.listen(PORT, function() {  // listener
  console.log("App listening on PORT " + PORT);
});

//---------------------------------------------------------------------------------
