const TaskModel = require("../models/Task.model");

// Each API should have a head comment which provides a good description about:
// 1. what the API does
// 2. what the request looks like
// 3. what responses can be expected (success and failure cases both included)
// post all the data 
const createTask = async (req, res) => {
    // The very first statement in any API function should be to log the incoming request.
    // In case of any failure downstream, knowing the incoming request helps a lot during
    // debugging and understanding what could've caused the failure. Logging is extremely helpful
    // and logging the right things in the right place with the right messages can be the
    // difference between spending hours in finding the root error causes vs just looking at the
    // logs and figuring it out in 2 minutes.
    //
    // Each API function should follow the following structure -
    //
    // const <_http_method_><_resource_> = async (req, res) => {
    //   console.group('Received request from {req.user.id} to create task, with body: {req.body}.');
    //   try {
    //     console.log('Performing _operation_ with params: {_params_}.')
    //     // perform API specific operations here
    //     console.log('Successfully performed _operation_.');
    //     res.status(_status_code_)
    //   } catch (e) {
    //     console.error('Could not perform _operation_.', e.message);
    //     // add some retry logic here.
    //     if (numRetries > retryLimit) {
    //        res.status(500).send({ "error": "_relevant_error_message_goes_here_" });
    //     }
    //   }
    //   console.groupEnd();
    // });
    // 

    // Deserialisation can be done is a better way. Usually for serialisation and deserialisation
    // static functions are defined in the model class itself. Something like this for example -
    //
    // In models/Task.model.js
    //
    // // This function deserialises the input json into a Task object.
    // static from(task_json, user_json) {
    //   return Object.assign(new Task(), task_json, user_json);
    // }
    //
    // Its invocation would be something like -
    // const task = Task.from(req.body, req.user);
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
    const allTasks = await TaskModel.find();
    // if (!allTasks) return res.send({message:"No Task found"});
    return res.send(allTasks);
  } catch (err) {
    // Errors should be logged at the error level, not the default level.
    console.log(err);
    // Error message used below is not clear at all. It gives 0 idea about
    // what happened at the server and whether the client should retry the
    // request and hope for the correct response the next time. The error
    // response, should contain a human readable / understandable message
    // with the proper status code. In this case the status code would be
    // 500. This statement should be something like -
    // res.status(500).send({"error": _stringified_error_});
    // Also, there should be some form of failure handling on the server
    // end first, based on the error type. There should be some notion of
    // whether the error was transient and would get fixed on retries.
    // Error handling in APIs is very crucial for applications working at
    // a large scale.
    res.send("sth went wrong");
  }
};

const editTasks = async (req,res) => {
    try{
      // What is the '+' for? It serves no purpose. Avoid such statements.
      // Nit: Also req.params.id can be used inline in the 2 places. That
      // will avoid creating a new variable.
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
      // Always log before and after database (or any IO operations for that matter).
      // Certain IO operations might take long to run so it might also be nice to
      // read the logs and see how long it takes on average for some operation to
      // finish. It will give some idea about what the critical path of the API is.
      // This is helpful in figuring out what operations in the API flow should be
      // focused on for optimisations.
      //
      // IO operations also need to have proper error handling. Having a catch-all
      // for all kinds of errors is not a good way to do error handling because errors
      // from different operations are different and should be treated as such. Some
      // errors would be transient like say transaction timeout error or connection
      // error but something like duplicate primary key or some other column constraint
      // error is not. Knowing the distinction between error types greatly helps in
      // making the API code more resilient to failures and improves the success rate
      // of the API calls. Large applications with way more complex APIs and a lot more
      // moving parts cannot tolerate points of failures. They all have some or the other
      // fallback mechanism. Think about such things while writing APIs. Read more
      // about how to better handle errors.
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
