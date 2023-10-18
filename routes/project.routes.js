const express = require("express");
const ProjectController = require("../controllers/project.controller");
const ProjectMiddleware = require("../middlewares/project.middleware");

const router = express.Router();

router.get("/", ProjectController.get);
router.get("/:id", ProjectMiddleware.verifyProjectId, ProjectController.getOne);
router.post("/", ProjectMiddleware.verifyProjectValues, ProjectController.add);
router.put("/:id", ProjectMiddleware.verifyProjectValuesAndId, ProjectController.update);
router.delete("/:id", ProjectMiddleware.verifyProjectId, ProjectController.delete);

module.exports = router;
