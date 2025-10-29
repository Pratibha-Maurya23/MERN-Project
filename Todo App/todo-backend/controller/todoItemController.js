const Todoitem = require("../models/Todoitem");

exports.createTodoItem = async (req,res,next)=>{
  console.log("Items Added: ",req.body);
  const {task, date} = req.body; 
  const todoItem = new Todoitem({task, date});
   await todoItem.save()
  res.status(201).json(todoItem);
}

exports.getTodoItem = async (req, res, next) =>{
  const todoItems = await Todoitem.find();
  res.json(todoItems);
}

exports.deleteTodoItem = async (req, res, next) =>{
  const { id }= req.params;
  await Todoitem.findByIdAndDelete(id);
  res.status(204).json({_id: id});
}

exports.markCompleted = async (req, res, next) =>{
  const { id }= req.params;
  const todoItem = await Todoitem.findById(id);
  todoItem.completed = true;
  await todoItem.save()
  res.json(todoItem);
}

