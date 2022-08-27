const mongoose=require("mongoose")
const { Schema } = mongoose;
const timerSchema= new mongoose.Schema({
    id:{type:Number,required:true},
    project:{type:String,required:true},
    stopat:{type:String,required:true},
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      }
})

const TimerModel= mongoose.model("task",timerSchema)

module.exports=TimerModel