console.log("this is loaded");

exports.stripe = {
  id: process.env.STRIPE_PUBLISHABLE_KEY
};

exports.googlemap = {
  keys: process.env.GOOGLEMAP_KEY
};
