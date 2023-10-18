const TaskModel = require("../models/task.model");
const ProjectModel = require("../models/project.model");

module.exports = {
  get: async (req, res) => {
    try {
      const data = await TaskModel.find().populate("project");
      return res.status(200).send({
        success: true,
        message: "Data fetched successfully!",
        data: data,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).send({
        success: false,
        message: "Error server ...",
      });
    }
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    try {
      const data = await TaskModel.findById(id).populate("project");
      return res.status(200).send({
        success: true,
        message: "Data fetched successfully!",
        data: data,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).send({
        success: false,
        message: "Error server ...",
      });
    }
  },
  add: async (req, res) => {
    const { label, description, starting_date, ending_date, project, statut } =
      req.body;
    try {
      if (!label) {
        return res.send("Label is empty!");
      } else if (!description) {
        return res.send("Description is empty!");
      } else if (!starting_date) {
        return res.send("Starting date is empty!");
      } else if (!ending_date) {
        return res.send("Ending date is empty!");
      } else if (!project) {
        return res.send("Project date is empty!");
      }
      const data = await TaskModel.create({
        label,
        description,
        statut,
        starting_date,
        ending_date,
        project,
      });
      data.project = await ProjectModel.findById(data.project);
      return res.status(200).send({
        success: true,
        message: "Task created successfully!",
        data: data,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).send({
        success: false,
        message: "Error server ...",
      });
    }
  },
  update: async (req, res) => {
    const { label, description, starting_date, ending_date, project_id } =
      req.body;
    try {
      const data = await TaskModel.findByIdAndUpdate(req.params.id, {
        label,
        description,
        starting_date,
        ending_date,
        project_id,
      });
      data.project = await ProjectModel.findById(data.project);
      return res.status(200).send({
        success: true,
        message: "Task updated successfully!",
        data: data
      });
    } catch (err) {
      console.log(err);
      return res.status(400).send({
        success: false,
        message: "Error server ...",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const data = await TaskModel.deleteOne({ _id: req.params.id });
      return res.status(200).send({
        success: true,
        message: "Task deleted successfully!",
      });
    } catch (err) {
      console.log(err);
      return res.status(400).send({
        success: false,
        message: "Error server ...",
      });
    }
  },
};
