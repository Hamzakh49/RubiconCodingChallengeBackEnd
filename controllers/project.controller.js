const ProjectModel = require("../models/project.model");

module.exports = {
  get: async (req, res) => {
    const data = await ProjectModel.find();
    return res.send(data);
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    try {
      const data = await ProjectModel.findById(id);
      return res.send(data);
    } catch (err) {
      console.log(err);
      return res.send("Error server ...");
    }
  },
  add: async (req, res) => {
    const { label, description, statut, starting_date, ending_date } = req.body;
    try {
      if (!label) {
        return res.send("Label is empty!");
      }
      else if(!description){
        return res.send("Description is empty!");
      }
      else if(!starting_date){
        return res.send("Starting date is empty!");
      }
      else if(!ending_date){
        return res.send("Ending date is empty!");
      }
      const data = await ProjectModel.create({
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
    const { label, description, statut, starting_date, ending_date } = req.body;
    try {
      const data = await ProjectModel.findByIdAndUpdate(req.params.id, {
        label,
        description,
        statut,
        starting_date,
        ending_date,
      });
      return res.send("Project updated successfully");
    } catch (err) {
      return res.send("Error server...");
    }
  },
  delete: async (req, res) => {
    try {
      const data = await ProjectModel.deleteOne({ _id: req.params.id });
      return res.send("Project deleted successfully");
    } catch (err) {
      return res.send("Error server...");
    }
  },
};
