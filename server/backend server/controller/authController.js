const express = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("../models/User.model");
var jwt = require("jsonwebtoken");

const register = (req, res) => {
  if ( !req.body.email || !req.body.password) {
    return res.send({message:"required fields are email,password"});
  }
  const {  email, password } = req.body;
  bcrypt.hash(password, 8, async (err, hash) => {
    // Store hash in your password DB.
    if (err) {
      return res.send("error in bcrypt password");
    }
    const user = new UserModel({ email, password: hash });
    await user.save();
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
