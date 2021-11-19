const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = mongoose.model('User');

passport.use(
    new LocalStrategy(
    {
        usernameField: 'email'
    }, 
    function(username, password, done) {
        User.findOne({ email: username }, function(err, user) {
            if (err) {
                return done(err);
            }
            // Return if user not found in DB
            if (!user) {
                return done(null, false, {
                    message: 'User not found'
                });
            }
            // Return if password is wrong
            if (!user.validatePassword(password)) {
                return done(null, false, {
                    message: 'Password is incorrect'
                });
            }
            // If credentials are correct, return the user obj
            return done(null, user);
        });
    }
    )
);