const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  //receive post req when user pay, and use body-parser to parse it
  //then the data is in req.body and use it to finalize the payment
  //check body-parser

  app.post('/api/stripe',requireLogin,async (req, res) => {

    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id,
    });

    //req.user is current user model
    //passport auto set req.user using session call in index.js
    req.user.credits += 5;
    const user = await req.user.save(); //newest user

    res.send(user);
  });
};