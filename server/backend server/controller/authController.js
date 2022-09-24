const express = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("../models/User.model");
var jwt = require("jsonwebtoken");

const register = (req, res) => {
  if ( !req.body.email || !req.body.password) {
        // Explicitly add status codes for error responses. Using a json object for the response body is
        // good but not having the correct status code hurts. The statement should be -
        // return res.status(400).send({message:"required fields are email,password"});
        // Status code 400 is used for indicating bad requests, where the request was malformed or
        // had missing parameters. Also a better way to write the same error message is -
        // "Missing required fields - email, password"
        return res.send({message:"required fields are email,password"});
  }
  const {  email, password } = req.body;
  bcrypt.hash(password, 8, async (err, hash) => {
    // Store hash in your password DB.
    if (err) {
        // This is not a good way to return error responses. APIs should conform to REST principles.
        // All error response should be formatted in a certain way so that the client knows what to expect.
        // A proper json object with error message and any other relevant information must be sent back
        // with an appropriate status code. For internal errors status code 401 should be used.
        // Read about status codes here - https://restfulapi.net/http-status-codes/ 
        // It should be something like -
        // res.status(500).send({ error: "Encrypting the password failed" });
        // Also, try to maintain uniformity with responses in the application. Like above and below, both
        // error responses are json objects but here it is a string.
        return res.send("error in bcrypt password");
    }
    const user = new UserModel({ email, password: hash });
    // What if this operation fails? Always handle for failures and add fallback mechanisms.
    await user.save();
    // Use status code 201 here.
    return res.send({message:"Register Successfull"});
  });
};

// Login
const login = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.send({message:"required fields are email,password"});
  }
  const { email } = req.body;
  try {
    const find_user = await UserModel.findOne({ email });
    if (!find_user) {
      // Avoid words like 'Plz'. Also the real error is that the user was not found. So the
      // error message should be something like - "User with email: ${email} not found".
      // Should use status code 404. Similarly for all the error cases below.
      return res.send({message:"Plz enter registered details"});
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      find_user.password
    );
    if (!isPasswordCorrect) {
      return res.send({message:"Wrong email or Password"});
    }
    const payload = {
      id: find_user._id,
    };
    const token = jwt.sign(payload, "masai", {
      expiresIn: "1h",
    });
    return res
      .cookie("access_token", token, { httpOnly: true
        // , secure:true
        })
      .send({message:"Login Success",token: token});
  } catch (err) {
    console.log(err);
    return res.send("Server Error   ");
  }
};

// cLogout
const logout = (req, res) => {
  res.clearCookie("access_token");
  return res.send({message:"Logout Successfully"});
};


const isLoggedIn = (req, res) => {
  const token = res.cookies.access_token;
  // const token = req.headers.authorization;
  if (!token) {
    return res.send(false);
  }
  jwt.verify(token, process.env.secret_key, (err) => {
    if (err) {
      return res.send("error in verifying token");
    }
    return res.send(token);
  });
};

module.exports = {
  register,
  login,
  logout,
  isLoggedIn,
};
