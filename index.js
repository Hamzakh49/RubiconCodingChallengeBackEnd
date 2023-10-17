const express = require("express");
const mongoose = require("mongoose");
const ProjectModel = require("./models/project.model");
const TaskModel = require("./models/task.model");
const projectRoutes = require("./routes/project.routes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://hamza981:hamza981@cluster0.wthkbhr.mongodb.net/RubiCon?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    if (err.code) {
      console.error("MongoDB Error Code:", err.code);
    }
    console.error("Error:", err);
    console.log("Couldn't connect to MongoDB");
  });


app.use("/project", projectRoutes);

app.post("/add-task", async (req, res) => {
  const { label, description, starting_date, ending_date, project } = req.body;
  const data = await TaskModel.create({
    label,
    description,
    starting_date,
    ending_date,
    project: new mongoose.Types.ObjectId(project),
  });
  res.send("Task created successfully!");
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));
