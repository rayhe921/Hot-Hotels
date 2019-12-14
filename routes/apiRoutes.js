var db = require("../models");
const stripe = require("stripe")("sk_test_c9FfxLCFgbd0z459pCweEIKx00DqdPgiHq");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the posts
  app.get("/api/rooms/", function(req, res) {
    db.Post.findAll({}).then(function(dbRoom) {
      res.json(dbRoom);
    });
  });

  // // Get route for returning posts of a specific category
  // app.get("/api/rooms/category/:category", function(req, res) {
  //   db.Room.findAll({
  //     where: {
  //       category: req.params.category
  //     }
  //   }).then(function(dbRoom) {
  //     res.json(dbRoom);
  //   });
  // });

  // // Get route for retrieving a single post
  // app.get("/api/posts/:id", function(req, res) {
  //   db.Post.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  // });

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
    console.log("Here");
  });
};

// Token is created using Stripe Checkout or Elements!
// Get the payment token ID submitted by the form:
