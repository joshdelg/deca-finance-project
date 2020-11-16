const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = function(passport) {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, callback) => {
        const newUser = {
            googleId: profile.id,
            displayName: profile.displayName,
            image: profile.photos[0].value
        };

        try {
            let user = await User.findOne({
                googleId: profile.id
            });

            // If user exists, callback, otherwise, create new
            if(user) {
                callback(null, user);
            } else {
                user = await User.create(newUser);
                callback(null, user);
            }
        } catch (err) {
            console.error(err);
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => done(err, user));
    });
}