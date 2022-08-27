const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    id:{type:Number,required:true},
    title: {
      type: String,
      required: true,
    
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const TaskModel = mongoose.model("Client", taskSchema);
module.exports = TaskModel;
