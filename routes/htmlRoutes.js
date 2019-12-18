var db = require("../models");
var Op = require("sequelize").Op;

module.exports = function(app) {
  app.get("/home", function(req, res) {
    res.render("index");
  });

  app.get("/payment", function(req, res) {
    res.render("payment");
  });

  app.get("/client", function(req, res) {
    res.render("client");
  });

  app.get("/maps", function(req, res) {
    res.render("maps");
  });

  app.get("/thankyou", function(req, res) {
    res.render("thankyou");
  });

  // app.get("/rooms", function(req, res) {
  //   console.log("query begin date", req.query.beginDate);

  //   // TODO: use moment to prepare endDate and startDate

  //   var dateQuery = {};
  //   dateQuery[Op.between] = [
  //     /* TODO add startDate and endDate */
  //   ];
  //   db.Room.findAll({
  //     include: [
  //       {
  //         model: db.Occupancy,
  //         where: {
  //           date: dateQuery
  //         }
  //       }
  //     ]
  //   }).then(function(dbRooms) {
  //     console.log("rooms result", dbRooms);
  //     res.render("rooms", { rooms: dbRooms });
  //     //res.json(dbhotel);
  //   });
  // });

  app.get("/client/:id", function(req, res) {
    db.Client.findOne({ where: { id: req.params.id } }).then(function(hoteldb) {
      res.render("client", {
        client: hoteldb
      });
    });
  });

  //catch-all route that leads to home.html
  app.use(function(req, res) {
    res.render("intro");
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
