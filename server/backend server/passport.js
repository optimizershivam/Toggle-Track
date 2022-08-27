const passport =require("passport")
const GoogleStrategy = require('passport-google-oauth2').Strategy;
require("dotenv").config()


var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = function(req) {
    var token = null;
    if (req && req.cookies)
    {
        token = req.cookies['jwt'];
    }
    return token;
};
opts.secretOrKey = 'secret';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    console.log("JWT BASED  VALIDATION GETTING CALLED")
    console.log("JWT", jwt_payload)
    // if (CheckUser(jwt_payload.data)) {
        return done(null, jwt_payload.data)
    // } else {
    //     // user account doesnt exists in the DATA
    //     return done(null, false);
    // }
}));


passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
        done(null, user);
});

passport.use(new GoogleStrategy({
        clientID:process.env.CLIENT_ID,
        clientSecret:process.env.CLIENT_SECRET,
        callbackURL: "https://damp-reef-46945.herokuapp.com/google/callback",
        passReqToCallback   : true
    },
    function(request, accessToken, refreshToken, profile, done) {
        // console.log(profile)
            return done(null, profile);
    }
));