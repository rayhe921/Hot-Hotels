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

  // Post route for retrieving a reservation
  app.post("/api/reservation", function(req, res) {
    // 2. Add a join here to include the Client who purchased the room
    db.Reservation.create({
      checkIn: req.body.checkIn,
      checkOut: req.body.checkOut,
      totalCost: req.body.totalCost
    }).then(function(dbReservation) {
      console.log(dbReservation);
      res.json(dbReservation);
    });
  });
};
