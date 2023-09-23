const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    users: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userSchema",
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("categorySchema", categorySchema);
module.exports = Category;
