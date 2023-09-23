const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    users: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userSchema",
        require: true,
      },
    post:
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "blogSchema",
        require: true,
      },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("commentSchema", commentSchema);
module.exports = Comment;
