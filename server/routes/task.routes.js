const mongoose=require("mongoose")
const express=require("express")
const TaskController= express.Router()
const TimerModel=require("../models/Task/timer.model")


TaskController.post("/timer/create",async(req,res)=>{
const{task,day,date,time}=req.body
const{userId}=req.headers
const data=new TimerModel({task,day,date,time,userId})
await data.save()
res.send(data)


})

TaskController.get("/timer",async(req,res)=>{
    const {userId}=req.headers
     const data=await TimerModel.find({userId:userId})
     res.send(data)
})


TaskController.delete("/timer/:id",async(req,res)=>{
    const{id}=req.params
    const {userId}=req.headers
    const data=await TimerModel.findOne({_id:id})
    if(data.userId===userId)
    {
        const del=await TimerModel.findOneAndDelete({_id:id})
        res.send("delted")
    }
    else
    {
        res.send("invalid User you can  not delete")
    }
})

module.exports=TaskController
