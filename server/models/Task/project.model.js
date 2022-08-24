const mongoose=require("mongoose")
const projectSchema= new mongoose.Schema({
  name:{type:String,required:true},
  client:{type:String,required:true},
  userId:{type:String,required:true}


})
const ProjectModel= mongoose.model("project",projectSchema)

module.exports=ProjectModel
