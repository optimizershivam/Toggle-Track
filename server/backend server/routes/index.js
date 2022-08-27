const express = require("express");
const taskRoutes = require("./tasks");
const authRoutes = require("./auth");
const usersRoutes = require("./users");
const authentication = require("../middlewares/authentication");


const router = express.Router();

router.use("/auth", authRoutes);
router.use("/tasks", authentication , taskRoutes);
router.use("/users", authentication, usersRoutes);

module.exports = router;
