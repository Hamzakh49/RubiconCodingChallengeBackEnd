const express = require("express");
const TaskController = require("../controllers/task.controller");
const TaskMiddleware = require("../middlewares/task.middleware");

const router = express.Router();

router.get("/get-task", TaskController.get);
router.get(
  "/get-task/:id",
  TaskMiddleware.verifyTaskId,
  TaskController.getOne
);
router.post("/add-task", TaskMiddleware.verifyTaskValues, TaskController.add);
router.put("/update-task/:id", TaskMiddleware.verifyTaskValuesAndId, TaskController.update);
router.delete("/delete-task/:id", TaskMiddleware.verifyTaskId, TaskController.delete);

module.exports = router;
