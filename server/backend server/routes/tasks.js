const express = require("express");
const { createTask, getAllTasks,editTasks,deleteTasks } = require("../controller/taskController");
const router = express.Router();

router.post("/", createTask);
router.get("/all", getAllTasks);
router.patch("/edit/:id", editTasks);
router.delete("/delete/:id", deleteTasks);

module.exports = router;
