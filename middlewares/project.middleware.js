const mongoose = require("mongoose");


module.exports = {
  verifyProject: async (req, res, next) => {
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
};
