const express = require("express");
const router = express.Router();
const {
  register,
  login,
  logout,
  isLoggedIn,
} = require("../controller/authController");

router.get("/hello", (req, res) => {
  res.send("Hello World");
});

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
// Either use snake case or camel case. This API path looks off.
router.get("/isloggedin", isLoggedIn);

module.exports = router;
