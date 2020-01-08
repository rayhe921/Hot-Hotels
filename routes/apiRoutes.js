var db = require("../models");
var stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

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

  app.post("/charge", function(req, res) {
    console.log("  nb  nb n n   n ", req.body);
    var totalCost = req.body.costInput;

    console.log("here", totalCost);

    const token = req.body.stripeToken; // Using Express

    (async () => {
      const charge = await stripe.charges.create({
        amount: totalCost,
        currency: "usd",
        description: "Example charge",
        source: token
      });
      res.json({ charge });
    })();
    res.render("thankyou");
  });
};
