var db = require("../models");

<<<<<<< HEAD
module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // GET route for getting all of the rooms
  app.get("/rooms", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Room.findAll({}).then(function (dbRoom) {
      // We have access to the rooms as an argument inside of the callback function
      res.json(dbRoom);
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
=======
module.exports = function(app) {
  app.get("/rooms", function(req, res) {
    res.render("rooms");
  });

  // app.get("/", (req, res) => {
  //   res.render("index", {
  //     // stripePublishableKey: keys.stripePublishableKey
  //   });
  // });

  app.get("/client/:id", function(req, res) {
    db.Client.findOne({ where: { id: req.params.id } }).then(function(hoteldb) {
      res.render("client", {
        client: hoteldb
>>>>>>> master
      });
    });
  });

  //catch-all route that leads to home.html
  app.use(function(req, res) {
    res.render("index");
  });
  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
