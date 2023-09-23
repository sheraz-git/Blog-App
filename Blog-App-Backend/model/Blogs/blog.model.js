const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
  images: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
   trim:true
  },
  description: {
    type: String,
    required: true,
  }, 
  User:{
  type: mongoose.Schema.Types.ObjectId,
  ref:"User"
}
},{
timestamps:true
});

const BLog = mongoose.model("blogSchema", blogSchema);
module.exports = BLog;
