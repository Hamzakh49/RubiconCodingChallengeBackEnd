const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    label: String,
    description: String,
    statut: String,
    starting_date: String,
    ending_date: String,
  },
  { timestamps: true }
);

const Project = mongoose.model("project", projectSchema);

module.exports = Project;
