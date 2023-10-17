const express = require("express");
const ProjectController = require("../controllers/project.controller");
const ProjectMiddleware = require("../middlewares/project.middleware");
// const mongoose = require("mongoose");

const router = express.Router();

router.get("/", ProjectController.get);
router.get("/:id", ProjectMiddleware.verifyProject, ProjectController.getOne);
router.post("/", ProjectController.add);
router.put("/:id", ProjectController.update);
router.delete("/:id", ProjectController.delete);

module.exports = router;
