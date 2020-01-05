console.log('this is loaded');

exports.stripe = {
  keys: process.env.STRIPE,
};

exports.googlemap = {
    keys: process.env.GOOGLEMAP_KEY
};