const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy; //for passport
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');//this pulls out the schema defined in User.js

passport.serializeUser((user, done) => { //user is a mongoose model from passport.use....
  done(null, user.id); //not profile id, the object id in db
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

// passport.use(
//   new GoogleStrategy({
//     clientID: keys.googleClientId,
//     clientSecret: keys.googleClientSecret,
//     callbackURL: '/auth/google/callback',
//     proxy: true //tell google heroku is safe, able to use https
//   }, (accessToken, refreshToken, profile, done) => {
//     User.findOne({googleId: profile.id})
//         //promise for checing existing record in db
//         .then((existingUser) => {
//           if (existingUser) {
//             //have a record with the given profile ID
//             done(null, existingUser); //(error,userRecord)
//
//           } else {
//             new User({googleId: profile.id})//save() the data into db
//               .save()
//               .then(user => done(null, user));
//           }
//         });
//
//   }));

passport.use(
  new GoogleStrategy({
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true //tell google heroku is safe, able to use https
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({googleId: profile.id});
      //promise for checking existing record in db

      if (existingUser) {
        //have a record with the given profile ID
        done(null, existingUser); //(error,userRecord)

      } else {
        const user = await new User({googleId: profile.id}).save();//save() the data into db
        done(null, user);
      }

    }));