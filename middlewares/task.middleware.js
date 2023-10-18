const mongoose = require("mongoose");

module.exports = {
  verifyTaskId: async (req, res, next) => {
    const { id } = req.params;
    console.log(req.params);
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
  verifyTaskValues: async (req, res, next) => {
    const { label, description, starting_date, ending_date, project } =
      req.body;
    try {
      if (!label) {
        return res.send({
          success: false,
          message: "Label is empty!",
        });
      } else if (!description) {
        return res.send({
          success: false,
          message: "Description is empty!",
        });
      } else if (!starting_date) {
        return res.send({
          success: false,
          message: "Starting date is empty!",
        });
      } else if (!ending_date) {
        return res.send({
          success: false,
          message: "Ending date is empty!",
        });
      } else if (!project) {
        return res.send({
          success: false,
          message: "Project is empty!",
        });
      } else if (new Date(starting_date) > new Date(ending_date)) {
        return res.send({
          success: false,
          message: "Starting date should be before ending date!",
        });
      } else {
        next();
      }
    } catch (err) {
      console.log(err);
      return res.send("Error server 1 ...");
    }
  },
  verifyTaskValuesAndId: async (req, res, next) => {
    const { id } = req.params;
    const { label, description, starting_date, ending_date } = req.body;
    try {
      if (!label) {
        return res.send("Label is empty!");
      } else if (!description) {
        return res.send("Description is empty!");
      } else if (!starting_date) {
        return res.send("Starting date is empty!");
      } else if (!ending_date) {
        return res.send("Ending date is empty!");
      } else if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.send("Error id is not valid");
      } else {
        next();
      }
    } catch (err) {
      console.log(err);
      return res.send("Error server 1 ...");
    }
  },
};
