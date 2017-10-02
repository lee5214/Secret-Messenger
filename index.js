const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const keys = require('./config/keys');

require('./models/User');//first create schema, then below passport could pull it
require('./models/Survey');
require('./servers/passport'); //passport.js will run immediately

mongoose.connect(keys.mongoURI);

const app = express();

//middlewares are wired with app.use
app.use(bodyParser.json());

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey],
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

//config only for production env
if(process.env.NODE_ENV === 'production'){
  //express will serve up production asserts like react main.js or main.css
  app.use(express.static('client/build'))

  //express will serve up the index.html if it doesn't recognize the route
  const path = require('path');
  app.get('*',(req,res) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

//equal to
//const authRoutes = require('./routes/authRoutes')
//authRoutes(app);
const PORT = process.env.PORT || 5000; //environment variables from heroku (for production)

app.listen(PORT);
