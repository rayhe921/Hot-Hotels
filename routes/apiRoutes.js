var db = require("../models");
const stripe = require("stripe")("sk_test_c9FfxLCFgbd0z459pCweEIKx00DqdPgiHq");

module.exports = function(app) {
  app.get("/api/rooms", function(req, res) {
    db.Room.findAll({}).then(function(dbhotel) {
      res.json(dbhotel);
    });
  });

  // Create a new example
  app.post("/charge", function(req, res) {
    const token = req.body.stripeToken; // Using Express
    (async () => {
      const charge = await stripe.charges.create({
        amount: 999,
        currency: "usd",
        description: "Example charge",
        source: token
      });
      res.json({ charge });
    })();
  });

  app.post("/client", function(req, res) {
    db.Client.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    })
      .then(function(dbClient) {
        console.log("success", dbClient.toJSON());
        res.json(dbClient);
      })
      .catch(function(err) {
        console.log(err, req.body.firstName);
      });
  });
};
