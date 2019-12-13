// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the rooms
  app.get("/api/rooms", function(req, res) {
    var query = {};
    if (req.query.client_id) {
      query.ClientId = req.query.client_id;
    }
    // 1. Add a join here to include all of the Clients to these Rooms
    db.Room.findAll({
      include: [db.Client],
      where: query
    }).then(function(dbRoom) {
      res.json(dbRoom);
    });
  });

  // Get route for retrieving a single room
  app.get("/api/rooms/:id", function(req, res) {
    // 2. Add a join here to include the Client who purchased the room
    db.Room.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbRoom) {
      console.log(dbRoom);
      res.json(dbRoom);
    });
  });

  // DELETE route for deleting rooms (not sure if we need this)
  app.delete("/api/rooms/:id", function(req, res) {
    db.Room.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbRoom) {
      res.json(dbRoom);
    });
  });
};
