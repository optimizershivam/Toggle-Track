const TaskModel = require("../models/Task.model");

const createTask = async (req, res) => {
  try {
    const newTask = await TaskModel({
      title: req.body.title,
      id:req.body.id,
      user: req.user.id,
  
    });
    const savedTask = await newTask.save();
    return res.send(savedTask);
  } catch (err) {
    console.log(err);
  }
};

const getAllTasks = async (req, res) => {
  try {
    const user=req.user.id
    const allTasks = await TaskModel.find({user:user});
    // if (!allTasks) return res.send({message:"No Task found"});
    return res.send(allTasks);
  } catch (err) {
    console.log(err);
    res.send("sth went wrong");
  }
};



const editTasks = async (req,res) => {
    try{
      const id= +req.params.id
      const allTasks = await TaskModel.findOne({id:id})
      const update_user = await TaskModel.findOneAndUpdate({id :id},
       req.body,
        { new: true }
      );
      return res.send({alltasks:update_user});
    }
    catch 
    {
      return res.send(err);
    }

}
const deleteTasks = async (req,res) => {
    try{
      const id= +req.params.id
      const data=await TaskModel.findOne({id:id})
      const del = await TaskModel.findOneAndDelete({id :id});
      res.send({message:"delted",data:del})
    }
    catch 
    {
      return res.send(err);
    }

}

module.exports = {
  createTask,
  getAllTasks,
  editTasks,
  deleteTasks
};
