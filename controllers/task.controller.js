const TaskModel = require("../models/task.model");

module.exports = {
  get: async (req, res) => {
    try {
      const data = await TaskModel.find();
    } catch (err) {
      console.log(err);
      return res.send("Error server ...");
    }
    return res.send(data);
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    try {
      const data = await TaskModel.findById(id);
      return res.send(data);
    } catch (err) {
      console.log(err);
      return res.send("Error server ...");
    }
  },
  add: async (req, res) => {
    const { label, description, starting_date, ending_date, project_id } = req.body;
    try {
      if (!label) {
        return res.send("Label is empty!");
      } else if (!description) {
        return res.send("Description is empty!");
      } else if (!starting_date) {
        return res.send("Starting date is empty!");
      } else if (!ending_date) {
        return res.send("Ending date is empty!");
      }else if(!project_id){
        return res.send("Project date is empty!");
      }
      const data = await TaskModel.create({
        label,
        description,
        statut,
        starting_date,
        ending_date,
      });
      return res.send("Project created successfully!");
    } catch (err) {
      console.log(err);
      return res.send("Error server ...");
    }
  },
  update: async (req, res) => {
    const { label, description, statut, starting_date, ending_date, project_id } = req.body;
    try {
      const data = await TaskModel.findByIdAndUpdate(req.params.id, {
        label,
        description,
        statut,
        starting_date,
        ending_date,
        project_id
      });
      return res.send("Project updated successfully");
    } catch (err) {
      return res.send("Error server...");
    }
  },
  delete: async (req, res) => {
    try {
      const data = await TaskModel.deleteOne({ _id: req.params.id });
      return res.send("Project deleted successfully");
    } catch (err) {
      return res.send("Error server...");
    }
  },
};
