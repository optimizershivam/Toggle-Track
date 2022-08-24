const mongoose=require("mongoose")
const express=require("express")
const ProjectController= express.Router()
const ProjectModel=require("../models/Task/project.model")


ProjectController.post("/project/create",async(req,res)=>{
const{name,client}=req.body
const{userId}=req.headers
const data=new ProjectModel({name,client,userId})
await data.save()
res.send(data)


})
ProjectController.patch("/edit",async(req,res)=>{
    const {id} = req.params;
    const {userId} = req.header;
    const note = await NotesModel.findOne({_id : id})
   
    if(note.userId === userId){
       const new_project = await ProjectModel.findOneAndUpdate({_id :id}, req.body, {new:true})
       return res.send({"message" : "successfully updated", new_project})
    }
    else{
       return res.send("you are not authorised to do it")
    }

})

ProjectController.get("/project",async(req,res)=>{
    const {userId}=req.headers
     const data=await TimerModel.find({userId:userId})
     res.send(data)
})


ProjectController.delete("/project/:id",async(req,res)=>{
    const{id}=req.params
    const {userId}=req.headers
    const data=await ProjectModel.findOne({_id:id})
    if(data.userId===userId)
    {
        const del=await ProjectModel.findOneAndDelete({_id:id})
        res.send("delted")
    }
    else
    {
        res.send("invalid User you can  not delete")
    }
})
module.exports=ProjectController

