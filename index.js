const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/User');//first create schema, then below passport could pull it
require('./servers/passport'); //passport.js will run immediately

mongoose.connect(keys.mongoURI);

const app = express();

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey],
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

//equal to
//const authRoutes = require('./routes/authRoutes')
//authRoutes(app);
const PORT = process.env.PORT || 5000; //environment variables from heroku (for production)

app.listen(PORT);
