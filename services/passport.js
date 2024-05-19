const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  // that user is whatever we pulled out from the DB in the callback
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          // we have that user
          done(null, existingUser);
        } else {
          // we DON'T have that user, creat him in DB
          new User({
            googleId: profile.id,
          })
            .save()
            .then((user) => {
              done(null, user);
            });
        }
      });
    }
  )
);

// TODO: ADD SOME OTHER AUTH FOR E.G. FACEBOOK/LINKEDIN/SPOTIFY/GH
