// Requiring models
var db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the rooms
<<<<<<< HEAD
<<<<<<< HEAD
  app.get("/api/dummyRooms", function(req, res) {
    // 1. Add a join here to include all of the Clients to these Rooms
=======
  app.get("/api/rooms", function(req, res) {
>>>>>>> master
=======
  app.get("/api/dummyRooms", function(req, res) {
    // 1. Add a join here to include all of the Clients to these Rooms
>>>>>>> 2dc712b42a0fea511c84b5e54d72f8d205a34da8
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
};
