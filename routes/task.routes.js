const express = require("express");
const TaskController = require("../controllers/task.controller");
const TaskMiddleware = require("../middlewares/task.middleware");
// const mongoose = require("mongoose");

const router = express.Router();

router.get("/get-task", TaskController.get);
router.get(
  "/get-task/:task_id",
  TaskMiddleware.verifyTask,
  TaskController.getOne
);
router.post("/add-task", TaskController.add);
router.put("/update-task/:task_id", TaskController.update);
router.delete("/delete-task/:task_id", TaskController.delete);

module.exports = router;
