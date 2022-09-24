// This file is just all over the place. Ideally it should be 10 20 lines at max,
// with 10 lines of imports and 10 lines just initialising the app object. It should
// absolutely not contain any API logic, or routes munging.

const express = require("express");
const { connection } = require("./config");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const jwt = require('jsonwebtoken')


// oauth
const passport = require('passport');
// const cookieSession = require('cookie-session');
require('./passport');


// This is a mess again. All the routes should've been part of routes/index.js.
// Defining half of the stuff there and the other half here is a poor practice.
// Have consistency in your code. Decide and follow one way of doing things
// within the team. This smells like lack of proper team co-ordination. Such
// things should be discussed upfront and sorted out so everyone knows how to
// go about things. Y'all should refer to and follow guidelines laid out by
// the framework authors for best practices.
// In a large project where at least 20 different people write code, if everyone
// decided to do things their way, the code would become unmaintainable very soon.
const allRoutes = require("./routes/index");
const authentication = require("./middlewares/authentication");
const ProjectController = require("./routes/project")
const TaskController = require("./routes/task")


require("dotenv").config();
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser());
app.use("/project", authentication,ProjectController)
// Why is this called timer? Use the name of resource and not some random name for an
// API route.
app.use("/timer", authentication,TaskController)
// Routes
app.use("", allRoutes);

// testing
app.get("/", (req, res) => {
  res.send("Hello From Home Page");
});

// oauth 

// Delete all the commented code please to improve codebase health.
// Seeing commented code in so many files hurts.

// app.use(cookieSession({
//   name: 'google-auth-session',
//   keys: ['key1', 'key2']
// }))

// const isLoggedIn = (req, res, next) => {
//     if (req.user) {
//         next();
//     } else {
//         // res.sendStatus(401);
//         res.send("unauthorized")
//     }
// }

// app.use(passport.initialize());
// app.use(passport.session());

// const port = process.env.PORT || 8080


// All of the APIs below should be in their respective controller and route files.
// This is not the place to add any business logic.

app.get("/login",(req,res)=> {
    res.send(`<a href="https://damp-reef-46945.herokuapp.com/google">Login via google <a/>`)
})
// app.get("/profile",(req,res)=> {
//     console.log(req.user)
//     res.send({user:req.user})
// })
app.get('/profile', passport.authenticate('jwt', { session: false }) ,(req,res)=>{
    res.send(`THIS IS UR PROFILE MAAANNNN ${req.user.email} & This is your ${req.user.displayName}`)
})

// app.get("/failed", (req, res) => {
//     res.send("Failed")
// })
// // app.get("/success",isLoggedIn, (req, res) => {
// //     res.send(`Welcome ${req.user.email}`)
// // })



app.get('/google',
    passport.authenticate('google', {
            scope:
                ['email', 'profile']
        }
    ));

app.get('/google/callback',
    passport.authenticate('google') ,(req, res)=> {
        console.log('redirected', req.user)
    let user = {
        displayName: req.user.displayName,
        name: req.user.name.givenName,
        email: req.user._json.email,
        provider: req.user.provider }
        console.log(user)
    let token = jwt.sign({
        data: user
        }, 'secret', { expiresIn: '1h' });
    res.cookie('jwt', token)
        res.redirect('/profile')

    }
);




app.get("/logout", (req, res) => {
    res.clearCookie("jwt");
    // return res.send({message:"Logout Successfully"});
    res.redirect('/');
})


// Don't leave blank lines at random. This is very weird.



app.listen(PORT, async () => {
  try {
    await connection;
    console.log("DB Connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log("Server is running");
});
