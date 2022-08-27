const express = require("express");
const router = express.Router();
const { getUserInfo, updateUser } = require("../controller/userController");

router.get("/me", getUserInfo);
router.put("/me", updateUser);

module.exports = router;
