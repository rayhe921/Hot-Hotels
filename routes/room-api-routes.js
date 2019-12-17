// Requiring models
var db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the rooms

 
  app.get("/api/dummyRooms", function(req, res) {
    // 1. Add a join here to include all of the Clients to these Rooms

    db.Room.findAll({}).then(function(dbRoom) {
      res.json(dbRoom);
    });
  });

  // Get route for retrieving a single room
  app.get("/api/reservations/:id", function(req, res) {
    // 2. Add a join here to include the Client who purchased the room
    db.Reservation.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbReservation) {
      console.log(dbReservation);
      res.json(dbReservation);
    });
  });

    // POST route for saving a new todo
    app.post("/api/reservations", function(req, res) {
      console.log(req.body);
      // create takes an argument of an object describing the item we want to
      // insert into our table. In this case we just we pass in an object with a text
      // and complete property (req.body)
      // db.Reservation.create({
      //   checkIn: req.body.checkIn,
      //   checkOut: req.body.checkOut
      // }).then(function(dbTodo) {
      //   // We have access to the new todo as an argument inside of the callback function
      //   res.json(dbTodo);
      // });
    });
};
