var db = require("../models");

module.exports = function(app) {
  app.post("/reservation", function(req, res) {
    db.Reservation.create({
      checkIn: req.body.checkIn,
      checkOut: req.body.checkOut,
      totalCost: req.body.totalCost,
      roomId: req.body.roomId
      //  clientId: req.body.clientId
    })
      .then(function(dbReservation) {
        console.log("success", dbReservation.toJSON());
        res.json(dbReservation);
      })
      .catch(function(err) {
        console.log(err, req.body.checkIn);
      });
  });

  app.post("/client", function(req, res) {
    db.Client.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    })
      .then(function(dbClient) {
        console.log(dbClient.id);
        console.log("success", dbClient.toJSON());
        res.json(dbClient);
      })
      .catch(function(err) {
        console.log(err, req.body.firstName);
      });
  });
};
