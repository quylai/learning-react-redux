


$("#chirp-submit").on("click", function(event) {
  event.preventDefault();

  var newGuest = {

    first_name: $("#firstName").val().trim(),
    last_name: $("#lastName").val().trim(),
  
    user_name: $("#userName").val().trim(),
    lic_plate_num: $("#plateNumber").val().trim(),
    lic_plate_state: $("#plateState").val().trim(),
  
    car_make: $("#carMake").val().trim(),
    car_model: $("#carModel").val().trim(),
    car_color: $("#carColor").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newGuest);  // for db purpose 

  $.post("/api/new", newGuest)  // triggered when "new" http-POST invoke
  
    .then(function() {

      // update queue page when guest {wanted to get vehicle} = {new-item-in-queue}

    });


  // clearing en
  $("#firstName").val();
  $("#lastName").val();
  //
  $("#userName").val();
  $("#plateNumber").val();
  $("#plateState").val();
  //
  $("#carMake").val();
  $("#carModel").val();
  $("#carColor").val();

});

// by default, http-GET is processed
$.get("/api/all", function(data) {

  // "data" is the table, initial state prior entry
  
  // load current guests "on-queue" when app start

});

//---------------------------------------------------------------------------------
