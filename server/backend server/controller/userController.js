const express = require("express");
const UserModel = require("../models/User.model");
// const router = express();

const getUserInfo = async (req, res) => {
  try {
    const find_user = await UserModel.findById(req.user.id).select(
      "name email password"
    );
    return res.send(find_user);
  } catch (err) {
    // console.log(err);
    return res.send(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const update_user = await UserModel.findByIdAndUpdate(
      req.user.id,
      {
        email: req.body.email,
      },
      { new: true }
    ).select("email");
    return res.send(update_user);
  } catch (err) {
    // console.log(err);
    return res.send(err);
  }
};

module.exports = {
  getUserInfo,
  updateUser,
};
