// Leave blank lines where necessary. This looks hotch potchy.
// The naming convention for the model files is also not
// consistent. Make sure to follow one convention (which should
// always be the language standard). Read style guides for the
// right naming practices.

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