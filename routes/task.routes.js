const express = require("express");
const TaskController = require("../controllers/task.controller");
const TaskMiddleware = require("../middlewares/task.middleware");
// const mongoose = require("mongoose");

const router = express.Router();

router.get("/", TaskController.get);
router.get("/:task_id", TaskMiddleware.verifyTask, TaskController.getOne);
router.post("/", TaskController.add);
router.put("/:task_id", TaskController.update);
router.delete("/:task_id", TaskController.delete);

module.exports = router;
