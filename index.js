require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const projectRoutes = require("./routes/project.routes");
const taskRoutes = require("./routes/task.routes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    // "mongodb://127.0.0.1:27017/Rubicon",
    process.env.DATABASE,
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
app.use("/task", taskRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));
