const mongoose = require("mongoose");

module.exports = {
  verifyProjectId: async (req, res, next) => {
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
  verifyProjectValues: async (req, res, next) => {
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
      } else {
        next();
      }
    } catch (err) {
      console.log(err);
      return res.send("Error server 1 ...");
    }
  },
  verifyProjectValuesAndId: async (req, res, next) => {
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
