
const mongoose=require("mongoose")
const { Schema } = mongoose;
const projectSchema= new mongoose.Schema({
  id:{type:Number,required:true},
  name:{type:String,required:true},
  client:{type:String,required:true},
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },


})
const ProjectModel= mongoose.model("projects",projectSchema)

module.exports=ProjectModel