const express = require("express");
const ProjectController = require("../controllers/project.controller");
const mongoose = require("mongoose");

const router = express.Router();

router.get("/", ProjectController.get);
router.get(
  "/:id",
  (req, res, next) => {
    const { id } = req.params;
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.send("Error id is not valid");
      } else {
        next();
      }
    } catch (err) {
      console.log(err);
      return res.send("Error server 1 ...");
    }
  },
  ProjectController.getOne
);
router.post("/", ProjectController.add);
router.put("/:id", ProjectController.update);
router.delete("/:id", ProjectController.delete)

module.exports = router;
