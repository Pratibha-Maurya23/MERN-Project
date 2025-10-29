const mongoose = require('mongoose');

const todoItemSchema = new mongoose.Schema({
  task:{
    type:String,
    require:true
  },
  date: Date,
  completed:{
    type:Boolean,
    default:false
  }
},{timestamps:true});

module.exports = mongoose.model("TodoItem",todoItemSchema);