var db = require("../models");
var Op = require("sequelize").Op;
var moment = require("moment");
moment().format();

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

  app.get("/rooms", function(req, res) {
    // console.log("query begin date", req.query.beginDate);
    //moment conversion script

    var BeginDate;
    var EndDate;
    var NumberofNights = 0;
    var NumberofAdults = 0;

    BeginDate = req.query.beginDate;
    EndDate = req.query.endDate;
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
    console.log(BeginDate);
    console.log(CheckInDate);

    console.log(EndDate);
    console.log(CheckOutDate);

    //Number of Nights calculation with moment
    var CheckInUTC = CheckIn.format();
    var CheckOutUTC = CheckOut.format();

    var date1 = moment(CheckInUTC);
    var date2 = moment(CheckOutUTC);
    NumberofNights = date2.diff(date1, "days");
    console.log(NumberofNights);

    // TODO: use moment to prepare endDate and startDate

    var dateQuery = {};
    dateQuery[Op.notBetween] = [CheckInDate, CheckOutDate];
    console.log(dateQuery);
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
      console.log("rooms result", dbRooms);
      res.render("rooms", { rooms: dbRooms });
    });
  });

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
