var db = require("../models");
var Op = require("sequelize").Op;
var moment = require("moment");
moment().format();
var stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// var google = require("google")(process.env.GOOGLEMAP_KEY);

module.exports = function(app) {
  app.get("/home", function(req, res) {
    res.render("index");
  });

  app.get("/payment", function(req, res) {
    res.render("payment");
  });

  app.post("/charge", function(req, res) {
    //var totalCost = req.query.totalCost;
    const token = req.body.stripeToken; // Using Express
    (async () => {
      const charge = await stripe.charges.create({
        amount: "200",
        currency: "usd",
        description: "Example charge",
        source: token
      });
      res.json({ charge });
    })();
    res.render("thankyou");
  });

  app.get("/client", function(req, res) {
    res.render("client");
  });

  app.get("/maps", function(req, res) {
    res.render("maps");
  });

  app.get("/rooms", function(req, res) {
    //moment conversion script
    var BeginDate = req.query.beginDate;
    var EndDate = req.query.endDate;
    var BeginDateArr = BeginDate.split(/[\s,]+/);
    var EndDateArr = EndDate.split(/[\s,]+/);
    var CheckIn = moment()
      .month(BeginDateArr[0])
      .date(parseInt(BeginDateArr[1]))
      .year(parseInt(BeginDateArr[2]));
    var CheckOut = moment()
      .month(EndDateArr[0])
      .date(parseInt(EndDateArr[1]))
      .year(parseInt(EndDateArr[2]));

    var CheckInDate = CheckIn.format("DD/MM/YYYY");
    var CheckOutDate = CheckOut.format("DD/MM/YYYY");

    //Number of Nights calculation with moment
    var CheckInUTC = CheckIn.format();
    var CheckOutUTC = CheckOut.format();

    var date1 = moment(CheckInUTC);
    var date2 = moment(CheckOutUTC);
    NumberofNights = date2.diff(date1, "days");

    // TODO: use moment to prepare endDate and startDate
    var dateQuery = {};
    dateQuery[Op.notBetween] = [CheckInDate, CheckOutDate];
    db.Room.findAll({
      include: [
        {
          model: db.Occupancy,
          where: {
            date: dateQuery
          }
        }
      ]
    }).then(function(dbRooms) {
      res.render("rooms", {
        rooms: dbRooms,
        BeginDate: req.query.beginDate,
        EndDate: req.query.endDate,
        prvData: req.query
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
