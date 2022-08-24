const mongoose=require("mongoose")

const timerSchema= new mongoose.Schema({
    task:{type:String,required:true},
    time:{type:String,required:true},
    date:{type:String,required:true},
    day:{type:String,required:true},
    userId:{type:String,required:true}
})

const TimerModel= mongoose.model("task",timerSchema)

module.exports=TimerModel