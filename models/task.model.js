const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    label: String,
    description: String,
    starting_date: String,
    ending_date: String,
    project: { type: Schema.Types.ObjectId, ref: "project" },
  },
  { timestamps: true }
);

const Task = mongoose.model("task", taskSchema);

module.exports = Task;
