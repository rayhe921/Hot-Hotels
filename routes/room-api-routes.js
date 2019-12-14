// Requiring models
var db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the rooms
  app.get("/api/rooms", function(req, res) {
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
